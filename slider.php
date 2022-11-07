<?php

namespace BdevsElementor\Widget;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;
use Elementor\Scheme_Typography;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;

/**
 * Bdevs Elementor Widget.
 *
 * Elementor widget that inserts an embbedable content into the page, from any given URL.
 *
 * @since 1.0.0
 */
class BdevsSlider extends \Elementor\Widget_Base
{

    /**
     * Get widget name.
     *
     * Retrieve Bdevs Elementor widget name.
     *
     * @since 1.0.0
     * @access public
     *
     * @return string Widget name.
     */
    public function get_name()
    {
        return 'bdevs-slider';
    }

    /**
     * Get widget title.
     *
     * Retrieve Bdevs Elementor widget title.
     *
     * @since 1.0.0
     * @access public
     *
     * @return string Widget title.
     */
    public function get_title()
    {
        return __('Slider', 'bdevs-elementor');
    }

    /**
     * Get widget icon.
     *
     * Retrieve Bdevs Slider widget icon.
     *
     * @since 1.0.0
     * @access public
     *
     * @return string Widget icon.
     */
    public function get_icon()
    {
        return 'eicon-slideshow';
    }

    /**
     * Get widget categories.
     *
     * Retrieve the list of categories the Bdevs Slider widget belongs to.
     *
     * @since 1.0.0
     * @access public
     *
     * @return array Widget categories.
     */
    public function get_categories()
    {
        return ['bdevs-elementor'];
    }

    public function get_keywords()
    {
        return ['slides', 'carousel'];
    }

    public function get_script_depends()
    {
        return ['bdevs-elementor'];
    }

    // BDT Position
    protected function element_pack_position()
    {
        $position_options = [
            ''              => esc_html__('Default', 'bdevs-elementor'),
            'top-left'      => esc_html__('Top Left', 'bdevs-elementor'),
            'top-center'    => esc_html__('Top Center', 'bdevs-elementor'),
            'top-right'     => esc_html__('Top Right', 'bdevs-elementor'),
            'center'        => esc_html__('Center', 'bdevs-elementor'),
            'center-left'   => esc_html__('Center Left', 'bdevs-elementor'),
            'center-right'  => esc_html__('Center Right', 'bdevs-elementor'),
            'bottom-left'   => esc_html__('Bottom Left', 'bdevs-elementor'),
            'bottom-center' => esc_html__('Bottom Center', 'bdevs-elementor'),
            'bottom-right'  => esc_html__('Bottom Right', 'bdevs-elementor'),
        ];

        return $position_options;
    }

    protected function _register_controls()
    {
        $this->start_controls_section(
            'section_content_sliders',
            [
                'label' => esc_html__('Sliders', 'bdevs-elementor'),
            ]
        );

        $this->add_control(
            'chose_style',
            [
                'label'     => esc_html__('Chose Style', 'bdevs-elementor'),
                'type'      => Controls_Manager::SELECT,
                'options'   => [
                    'slider-style-1'  => esc_html__('Slider Style 1', 'bdevs-elementor'),
                ],
                'default'   => 'slider-style-1',
            ]
        );



        $this->add_control(
            'tabs',
            [
                'label' => esc_html__('Slider Items', 'bdevs-elementor'),
                'type' => Controls_Manager::REPEATER,
                'default' => [
                    [
                        'tab_title'   => esc_html__('Slide #1', 'bdevs-elementor'),
                        'tab_content' => esc_html__('I am item content. Click edit button to change this text.', 'bdevs-elementor'),
                    ]
                ],
                'fields' => [

                    [
                        'name'        => 'tab_title',
                        'label'       => esc_html__('Title', 'bdevs-elementor'),
                        'type'        => Controls_Manager::TEXTAREA,
                        'dynamic'     => ['active' => true],
                        'default'     => esc_html__('Slide Title', 'bdevs-elementor'),
                        'label_block' => true,
                    ],
                    [
                        'name'    => 'tab_image',
                        'label'   => esc_html__('Background Image', 'bdevs-elementor'),
                        'type'    => Controls_Manager::MEDIA,
                        'dynamic' => ['active' => true],
                    ]
                ],
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'section_content_button',
            [
                'label'     => esc_html__('Shape & Images', 'bdevs-elementor'),
            ]
        );



        $this->add_control(
            'shapge-image-1',
            [
                'label'   => esc_html__('Shape Image 1', 'bdevs-elementor'),
                'type'    => Controls_Manager::MEDIA,
                'dynamic' => ['active' => true],
                'description' => esc_html__('Add Shape Image 1', 'bdevs-elementor'),
            ]
        );

        $this->add_control(
            'shapge-image-2',
            [
                'label'   => esc_html__('Shape Image 2', 'bdevs-elementor'),
                'type'    => Controls_Manager::MEDIA,
                'dynamic' => ['active' => true],
                'description' => esc_html__('Add Shape Image 2', 'bdevs-elementor'),
            ]
        );

        $this->add_control(
            'shapge-image-3',
            [
                'label'   => esc_html__('Shape Image 3', 'bdevs-elementor'),
                'type'    => Controls_Manager::MEDIA,
                'dynamic' => ['active' => true],
                'description' => esc_html__('Add Shape Image 3', 'bdevs-elementor'),
            ]
        );

        $this->add_control(
            'shapge-image-4',
            [
                'label'   => esc_html__('Shape Image 4', 'bdevs-elementor'),
                'type'    => Controls_Manager::MEDIA,
                'dynamic' => ['active' => true],
                'description' => esc_html__('Add Shape Image 4', 'bdevs-elementor'),
            ]
        );

        $this->add_control(
            'shapge-image-5',
            [
                'label'   => esc_html__('Shape Image 5', 'bdevs-elementor'),
                'type'    => Controls_Manager::MEDIA,
                'dynamic' => ['active' => true],
                'description' => esc_html__('Add Shape Image 5', 'bdevs-elementor'),
            ]
        );

        $this->add_control(
            'shapge-image-6',
            [
                'label'   => esc_html__('Shape Image 6', 'bdevs-elementor'),
                'type'    => Controls_Manager::MEDIA,
                'dynamic' => ['active' => true],
                'description' => esc_html__('Add Shape Image 6', 'bdevs-elementor'),
            ]
        );

        $this->end_controls_section();


        $this->start_controls_section(
            'section_content_layout',
            [
                'label' => esc_html__('Layout', 'bdevs-elementor'),
            ]
        );

        $this->add_responsive_control(
            'align',
            [
                'label'   => esc_html__('Alignment', 'bdevs-elementor'),
                'type'    => Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => esc_html__('Left', 'bdevs-elementor'),
                        'icon'  => 'fa fa-align-left',
                    ],
                    'center' => [
                        'title' => esc_html__('Center', 'bdevs-elementor'),
                        'icon'  => 'fa fa-align-center',
                    ],
                    'right' => [
                        'title' => esc_html__('Right', 'bdevs-elementor'),
                        'icon'  => 'fa fa-align-right',
                    ],
                    'justify' => [
                        'title' => esc_html__('Justified', 'bdevs-elementor'),
                        'icon'  => 'fa fa-align-justify',
                    ],
                ],
                'prefix_class' => 'elementor%s-align-',
                'description'  => 'Use align to match position',
                'default'      => 'center',
            ]
        );

        $this->add_control(
            'show_title',
            [
                'label'   => esc_html__('Show Title', 'bdevs-elementor'),
                'type'    => Controls_Manager::SWITCHER,
                'default' => 'yes',
            ]
        );

        $this->end_controls_section();
    }

    public function render()
    {

        $settings  = $this->get_settings_for_display();
        $chose_style = $settings['chose_style'];

        if ($chose_style == 'slider-style-1') : ?>





            <!-- bannar area -->
            <section id="home-bannar-slider">
                <?php
                foreach ($settings['tabs'] as $item) :
                    extract($item);
                ?>
                    <div class="bannar-area home-bannar-area  pb-100">

                        <div class="container">
                            <?php
                            if ('' !== $settings['shapge-image-2']['id']) :
                                $shape_image_src = wp_get_attachment_image_src($settings['shapge-image-2']['id'], 'full');
                                $shape_2_image_url = $shape_image_src ? $shape_image_src[0] : '';
                            ?>
                                <div class="small-star">
                                    <img src="<?php print esc_url($shape_2_image_url); ?>" alt="small-start">
                                </div>
                            <?php
                            endif; ?>



                            <div class="row align-items-center ">
                                <div class="col-md-9 ">
                                    <div class="bannar-area-title">
                                        <?php
                                        if ("" !== $item['tab_title']) : ?>
                                            <h1><?php echo wp_kses_post($item['tab_title']); ?></h1>
                                        <?php
                                        endif; ?>

                                        <?php
                                        if ('' !== $settings['shapge-image-1']['id']) :
                                            $shape_image_src = wp_get_attachment_image_src($settings['shapge-image-1']['id'], 'full');
                                            $shape_1_image_url = $shape_image_src ? $shape_image_src[0] : '';
                                        ?>
                                            <div class="arrow-shape">
                                                <img src="<?php print esc_url($shape_1_image_url); ?>" alt="line">
                                            </div>
                                        <?php
                                        endif; ?>
                                    </div>
                                </div>
                                <div class="col-md-3 ">
                                    <div class="bannar-area-right">
                                        <?php
                                        if ('' !== $settings['shapge-image-3']['id']) :
                                            $shape_image_src = wp_get_attachment_image_src($settings['shapge-image-3']['id'], 'full');
                                            $shape_3_image_url = $shape_image_src ? $shape_image_src[0] : '';
                                        ?>
                                            <div class="arrow">
                                                <img src="<?php print esc_url($shape_3_image_url); ?>" class="arrow" alt="">
                                            </div>
                                        <?php
                                        endif; ?>


                                        <?php
                                        if ('' !== $settings['shapge-image-4']['id']) :
                                            $shape_image_src = wp_get_attachment_image_src($settings['shapge-image-4']['id'], 'full');
                                            $shape_4_image_url = $shape_image_src ? $shape_image_src[0] : '';
                                        ?>
                                            <div class="star">
                                                <img src="<?php print esc_url($shape_4_image_url); ?>" alt="big star">
                                            </div>
                                        <?php
                                        endif; ?>
                                    </div>
                                </div>
                            </div>


                            <!-- hero image -->
                            <div class="row hero-world-image ">

                                <?php
                                if ('' !== $settings['shapge-image-5']['id']) :
                                    $shape_image_src = wp_get_attachment_image_src($settings['shapge-image-5']['id'], 'full');
                                    $shape_5_image_url = $shape_image_src ? $shape_image_src[0] : '';
                                ?>
                                    <div class="home-bannar-arrow">
                                        <a href="#whoWe">
                                            <img src="<?php print esc_url($shape_5_image_url); ?>" class="img-fluid" alt="bannar-arrow">
                                        </a>
                                    </div>
                                <?php
                                endif; ?>

                                <!-- ellipse image -->

                                <?php
                                if ('' !== $settings['shapge-image-6']['id']) :
                                    $shape_image_src = wp_get_attachment_image_src($settings['shapge-image-6']['id'], 'full');
                                    $shape_6_image_url = $shape_image_src ? $shape_image_src[0] : '';
                                ?>

                                    <div class="light-circle-img">
                                        <img src="<?php print esc_url($shape_6_image_url); ?>" alt="circle">
                                    </div>

                                <?php
                                endif; ?>



                                <div class="col-lg-6 offset-lg-3">
                                    <?php
                                    if ('' !== $item['tab_image']['id']) :
                                        $image_src = wp_get_attachment_image_src($item['tab_image']['id'], 'full');
                                        $image_url = $image_src ? $image_src[0] : '';
                                    ?>
                                        <div class="d-flex justify-content-center world-img">
                                            <img src="<?php echo $image_url; ?>" class="img-fluid" alt="">
                                        </div>
                                    <?php
                                    endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php
                endforeach; ?>
            </section>


        <?php elseif ($chose_style == 'slider-style-2') : ?>


        <?php endif; ?>

<?php
    }
}
