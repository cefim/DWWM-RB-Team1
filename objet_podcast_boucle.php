

<section class="podcast" id="podcast">
      <div class="container bloc-podcasts">
        <div class="row">

            <!-- 1er nouveau podcast-->
            <?php 
            // 1. on défini ce que l'on veut
            $args = array(
                'post_type' => 'podcasts',
                'posts_per_page' => 8,
            );

            // 2. on exécute la query
            //$my_query = new WP_Query($args);

            // 3. on lance la boucle !
if(have_posts()) : while (have_posts() ) : the_post();?>
          <div class="col-lg-3 col-md-3 col-xs-6 mb-4">
              <div class="card card-block">
                <a href="#"><img alt="" class="podcast-img" src="img/em1.jpeg">
                  
                  <div class="container d-flex justify-content-center podcast-over">
                    <div class="row list-inline flex-column">
                      <div class="col btn-play-pdc text-center">
                        <i class="fa fa-play-circle hidden-md-down fa-5x" aria-hidden="true"></i>
                      </div>
                      <div class="col social-nav pb-5">
                        <a href="#"><i class="partage fa fa-share-alt"></i></a>
                        <a href="#"><i class="partage fa fa-download"></i></a>
                        <a href="#"><i class="partage fa fa-user-plus"></i></a>
                      </div>
                    </div>
                  </div>

                  <div class="card-title-wrap">
                    <span class="card-title"><?php the_title(); ?></span>
                    <span class="card-text"><?php echo 'Publié il y a ' .human_time_diff(get_the_time('U'), current_time('timestamp')) ; ?></span>
                  </div>

                </a>
            </div>
          </div>

          <?php
endwhile;
endif;
?>

<?php // 4. On réinitialise à la requête principale (important)?>
<?php wp_reset_postdata(); ?>