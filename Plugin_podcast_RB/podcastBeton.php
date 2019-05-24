<?php
/*
Plugin Name: Plugin Podcast_béton
Plugin URI: https://mon-siteweb.com/
Description: Ceci est le plugin pour le podcast de Radio Béton
Author: RB Team 1, DevLoopers
Version: 1.0
Author URI: http://mon-siteweb.com/
*/


//Ajout des champs d'option 
if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page();	
}


  
// Fonctionalités

  add_action('init', 'podcast_rss');
function podcast_rss(){
  add_feed('my-awesome-podcast', 'my_podcast_rss');
}

// Créer un post type podcast

function custom_post_type() {

  $labels = array(
    'name'                => _x( 'Podcasts', 'Podcast General Name', 'text_domain' ),
    'singular_name'       => _x( 'Podcast', 'Course Singular Name', 'text_domain' ),
    'menu_name'           => __( 'Podcasts', 'text_domain' ),
    'parent_item_colon'   => __( 'Parent Podcast:', 'text_domain' ),
    'all_items'           => __( 'Tous les Podcasts', 'text_domain' ),
    'view_item'           => __( 'View Podcast', 'text_domain' ),
    'add_new_item'        => __( 'Ajouter un nouveau Podcast', 'text_domain' ),
    'add_new'             => __( 'Ajouter', 'text_domain' ),
    'edit_item'           => __( 'Edit Podcast', 'text_domain' ),
    'update_item'         => __( 'Update Podcast', 'text_domain' ),
    'search_items'        => __( 'Search Podcasts', 'text_domain' ),
    'not_found'           => __( 'Not found', 'text_domain' ),
    'not_found_in_trash'  => __( 'Not found in Trash', 'text_domain' ),
  );
  $args = array(
    'label'               => __( 'podcasts', 'text_domain' ),
    'description'         => __( 'Podcast Description', 'text_domain' ),
    'labels'              => $labels,
    'supports'            => array( 'title', 'editor', 'thumbnail' ),
    'taxonomies'          => array( 'category', 'post_tag' ),
    'hierarchical'        => false,
    'public'              => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => true,
    'show_in_admin_bar'   => true,
    'menu_position'       => 5,
    'menu_icon'           => 'dashicons-format-audio',
    'can_export'          => true,
    'has_archive'         => true,
    'exclude_from_search' => false,
    'publicly_queryable'  => true,
    'capability_type'     => 'page'
  );
  register_post_type( 'podcasts', $args );
}

add_action( 'init', 'custom_post_type', 0 );
  

function my_podcast_rss(){
  require_once( dirname( __FILE__ ) . '/podcast-rss-template.php' );
}
  
?>