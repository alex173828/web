# Шаблон проекта
Для инициализации файловой структуры необходим установленный пакет `python 3`.
Этапы инициализации:
1. Создать каталог для сайта.
2. Скопировать содержимое репозитория.
3. Установить необходимые пакеты: `npm install`.
4. Создать необходимую файловую структуру _UI_.
5. В корне сайта выполнить: `python3.7 init.py`.
6. Сделать первую сборку: `sudo npm run build`.
7. Запустить _dev-server_: `sudo npm run dev-server`.
8. Писать _UI_.
9. Перейти в браузере на http://localhost
## Файловая структура
```
|-- src/ (UI and other)
|   |-- index.js (Entry point)
|   |-- app.jsx (React Application)
|   |-- js/ (Helpers functions)
|   |-- assets/ (Images, gifs, fonts, media...)
|   |-- common/ (BEM UI)
|   |-- ...
|-- server/ (Server)
|   |-- dev-server.js (Server for developing. Support HMR)
|   |-- server.js (Test production build)
|   |-- router.js (Routing for SPA)
|-- dist/ (Finaly biuld)
|-- webpack/
|   |-- webpack.prod.config.js (Config to production. Support analaze)
|   |-- webpack.devconfig.js (Config to production. Support HMR and dev-server)
|-- init/ (Main files templates)
|-- init.py (Init script)
|-- package.json (packages js)
```