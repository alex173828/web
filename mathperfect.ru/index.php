<?php
$doc = JFactory::getDocument();
$doc->addStyleSheet(JUri::base().'templates/'.$doc->template.'/style.css');
$doc->addStyleSheet(JUri::base().'templates/'.$doc->template.'/font-awesome-4.7.0/css/font-awesome.min.css');
?>

<!DOCTYPE html>
<html lang="ru">
<jdoc:include type="head" />
<body>
	<div class="wrapper">
		
		<jdoc:include type="modules" name="position-1" />	

		<!-- main -->
		<div class="main">
		<header class="main-header">
			<jdoc:include type="modules" name="position-2" />
			<jdoc:include type="modules" name="position-8" />
		</header>
			<!-- news -->
			<main>
				<jdoc:include type="component" />

				<!-- sidebar -->
				<section class="sidebar">
					<jdoc:include type="modules" name="position-5" />
					<jdoc:include type="modules" name="position-6" />
					<jdoc:include type="modules" name="position-7" />
				</section> <!-- end of sidebar -->
			</main>
			
			<jdoc:include type="modules" name="position-3" /> <!-- footer -->

		</div> <!-- end of main -->
	</div>
</body>
</html>