<?php
/**
 Plugin Name: Caldera Grid
 */
include_once dirname(__FILE__)  . '/vendor/autoload.php';
add_action( 'admin_enqueue_scripts', function() {

} );



add_action('admin_menu', function(){
    add_menu_page(
        'Caldera Grid',
        'Caldera Grid',
        'edit_posts',
        'caldera-grid',
        'page'
    );
});


function page( $id = 'root'){
    \calderawp\calderaGrid\enqueue_assets( plugin_dir_path( __FILE__ ) );
    $id = is_string( $id ) && ! empty( $id ) ? esc_attr($id ) : 'root';
    echo "<div id={$id}></div>";
}
