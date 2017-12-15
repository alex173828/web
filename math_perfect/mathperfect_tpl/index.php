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
		
		<!-- Navigation -->
		<section class="navbar">
			<header class="navbar-header">
				<span class="logo">
					<img src="<?php echo JUri::base();?>templates/<?php echo $doc->template;?>/img/128.png" alt="">
				</span>
				<p class="navbar__title">MATHPERFECT</p>
			</header>
			<jdoc:include type="modules" name="position-0" />
		</section> <!-- end of navigation -->

		<!-- main -->
		<div class="main">
			<header class="main-header">
				<jdoc:include type="modules" name="position-1" />
			</header>
			<!-- news -->
			<main id="main-page">
				<section class="news">
					<jdoc:include type="modules" name="position-2" />
				</section> <!-- end of news -->

				<!-- sidebar -->
				<section class="sidebar">
					<jdoc:include type="modules" name="position-3" />
				</section> <!-- end of sidebar -->
			</main>
			
			<jdoc:include type="modules" name="position-4" /> <!-- footer -->

		</div> <!-- end of main -->
	</div>
</body>
</html>