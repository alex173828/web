import sys;
import os;
import re;

# define file content
sys.path.append('init/')
from index_js import index_js;
from app_jsx import app_jsx;

# definition function
def normalize(match):
    char = match[0];
    return char.upper() if char[0] != '-' else char[1].upper();

os.chdir('./src');
root = os.getcwd();
rootLevel = len(root.split('/'));

tree = os.walk(root);
for node in tree:
    # level offest
    level = len(node[0].split('/')) - rootLevel;
    # standard constants
    files = node[2];
    dirs = node[1];
    path = node[0];
    # additional
    paths = path.split('/');
    nameDir = paths[-1];
    # check zero, first and second levels
    if (level == 0):
        if ('style.scss' not in files):
            file = open('%s/%s' % (path, 'style.scss'), 'w');
            for dir in dirs:
                file.write('@import "%s/%s";\n' % (dir, dir));
            file.close();

        if ('index.js' not in files):
            file = open('%s/%s' % (path, 'index.js'), 'w');
            file.write(index_js);
            file.close();

        if ('app.jsx' not in files):
            file = open('%s/%s' % (path, 'app.jsx'), 'w');
            file.write(app_jsx);
            file.close();

    if (level == 1 or level == 2):
        if (nameDir+'.scss' not in files):
            file = open('%s/%s' % (path, nameDir + '.scss'), 'w');
            file.write('.%s {}\n\n' % nameDir);
            for dir in dirs:
                file.write('@import "%s/%s";\n' % (dir, dir))
            file.close();

    if (level > 2):
        prefixSCSS = '' if level == 3 else '_';
        # parts of name
        parts = paths[rootLevel + 3 - 1:];
        partsUpper = map(lambda part: part[0].upper() + part[1:], parts);

        # filenames
        fileName = ''.join(parts);
        SCSS = prefixSCSS + fileName + '.scss';
        JSX = fileName + '.jsx';

        # name of css class
        cssClass = fileName;

        # name React.Component
        componentName = ''.join(partsUpper);
        componentName = re.sub(
            '^(.)|[-_]([^_])|(-)',
            normalize,
            componentName
        );

        # create files
        if (SCSS not in files):
            file = open('%s/%s' % (path, SCSS), 'w');
            file.write('.%s {}\n\n' % cssClass);
            for dir in dirs:
                file.write('@import "%s/%s";\n' % (dir, '_' + fileName + dir))
            file.close();

        if (JSX not in files):
            file = open('%s/%s' % (path, JSX), 'w');
            file.write("""import React from 'react';

class %s extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            </React.Fragment>
        );
    }
}

export default %s;
            """ % (componentName, componentName));
            file.close();
        # '^(.)|[-_]([^_])|(-)',
    # need check existing .scss file
    # need check existing .jsx file
