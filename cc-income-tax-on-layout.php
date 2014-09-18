<?php
function load_cc_income_tax_on_calc($id, $title, $show_url = 0, $bg_color, $border_color, $text_color)
{
    if ($show_url == 1)
        load_cc_income_tax_on_custom_colors($id, $bg_color, $border_color, $text_color);
?>


<div class="CCT-Widget CCT-Widget-<?php echo $id; ?>">
	 	<div class="CCT-WidgetTitle CCT-WidgetTitle-<?php echo $id; ?>"><?php echo $title; ?></div>		   
        <div class="ccm-rowdiv">
			 <div class="ccm-leftdiv">
                <label for="<?php echo $id; ?>-income">Income in 2014 $ :</label>
			 </div>
			 <div class="ccm-rightdiv">
  	    	    <input id="<?php echo $id; ?>-income" class="ontario-income" type="text" placeholder="enter amount">
			 </div>
        </div>
        <div class="ccm-rowdiv">
    		<div class="CCT-WidgetLine CCT-WidgetLine-<?php echo $id; ?>"></div>
		</div>
        <div class="ccm-rowdiv">
			 <div class="ccm-leftresultdiv">
                <label for="<?php echo $id; ?>-ProvincialTax">Provincial tax $ :</label>
			 </div>
			 <div class="ccm-rightresultdiv">
                <span id="<?php echo $id; ?>-ProvincialTax" class=""></span>
			 </div>
        </div>
        <div class="ccm-rowdiv">
			 <div class="ccm-leftresultdiv">
                <label for="<?php echo $id; ?>-FederalTax">Federal tax $ :</label>
			 </div>
			 <div class="ccm-rightresultdiv">
                <span id="<?php echo $id; ?>-FederalTax" class=""></span>
			 </div>
        </div>
        <div class="ccm-rowdiv">
			 <div class="ccm-leftresultdiv">
                <label for="<?php echo $id; ?>-TotalTax">Total tax $ :</label>
			 </div>
			 <div class="ccm-rightresultdiv">
                <span id="<?php echo $id; ?>-TotalTax" class=""></span>
			 </div>
        </div>
        <div class="ccm-rowdiv">
			 <div class="ccm-leftresultdiv">
                <label for="<?php echo $id; ?>-AverageRate">Average tax rate % :</label>
			 </div>
			 <div class="ccm-rightresultdiv">
                <span id="<?php echo $id; ?>-AverageRate" class=""></span>
			 </div>
        </div>
        <div class="ccm-rowdiv">
			 <div class="ccm-leftresultdiv">
                <label for="<?php echo $id; ?>-AfterTaxIncome">After-tax income $ :</label>
			 </div>
			 <div class="ccm-rightresultdiv">
                <span id="<?php echo $id; ?>-AfterTaxIncome" class=""></span>
			 </div>
        </div>
        <?php if ($show_url) { ?>
    		<div class="ccm-rowdiv" >
                <div class="CCT-WidgetSignature CCT-WidgetSignature-<?php echo $id; ?>">Provided by <a href="http://CalculatorsCanada.ca" target="_blank">CalculatorsCanada.ca</a></div>
		    </div>
        <?php } ?>
		
</div>

		
		<?php 
}


function load_cc_income_tax_on_custom_colors($id, $bg_color, $border_color, $text_color)
{
?>
<style type="text/css">
.CCT-Widget-<?php echo $id; ?>, .CCT-WidgetTitle-<?php echo $id; ?> a, .CCT-WidgetTitle-<?php echo $id; ?> a:visited, .CCT-WidgetSignature-<?php echo $id; ?> a, .CCT-WidgetSignature-<?php echo $id; ?> a:visited, .CCT-WidgetLine-<?php echo $id; ?> {
    <?php echo (isset( $border_color) ? "border-color:" . $border_color . ";" : ""); ?>
    <?php echo (isset( $bg_color) ? "background-color:" . $bg_color . ";": ""); ?>
    <?php echo (isset( $text_color) ? "color:" . $text_color . " !important;": ""); ?>
}

.CCT-Widget-<?php echo $id; ?> input[type=text] {
    <?php echo (isset( $border_color) ? "border-color:" . $border_color . ";": ""); ?>
    <?php echo (isset( $text_color) ? "color:" . $text_color . ";": ""); ?>
    <?php echo (isset( $input_bg_color) ? "background-color:" . $input_bg_color . ";": ""); ?>
} 
</style>
<?php 
}
?>