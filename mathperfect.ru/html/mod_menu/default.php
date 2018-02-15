<?php
/**
 * @package     Joomla.Site
 * @subpackage  mod_menu
 *
 * @copyright   Copyright (C) 2005 - 2017 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;
$menu = JFactory::getApplication()->getMenu();

// The menu class is deprecated. Use nav instead
?>

<nav class="nav">
	<ul class="nav__list">
		<?php
		foreach ($list as $i => &$item)
		{
			$current = FALSE;

			if ($item->id == $menu->getActive()->id)
			{
				$current = TRUE;
			}
			echo '<li class="nav__item">';
			if($current) {
				echo "<a class='nav__link' href='".$item->flink."'>".$item->title."</a>";
			}
			else {
				echo "<a class='nav__link' href='".$item->flink."'>".$item->title."</a>";
			}
			echo '</li>';
		}
		?>
	</ul>
</nav>
