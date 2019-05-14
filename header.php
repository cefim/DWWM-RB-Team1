<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php wp_title(); ?></title>
    <?php wp_head(); ?>
    <link href="<?php bloginfo("stylesheet_url"); ?>" rel="stylesheet">
    <script src="<?php echo esc_url(get_template_directory_uri()); ?>/js/jquery-3.3.1.min.js"></script>
</head>
<body>
    <div id="container">
        <header id="head">
            <h1><?php bloginfo("name"); ?></h1>
            <div id="search">
                <?php get_search_form(); ?>
            </div>
        </header>
        <nav id="menu">
            <?php wp_nav_menu(array('theme_location'=>'menu_pricimpal')); ?>
        </nav>
    