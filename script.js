//chaos UPdate...

<!-- SID(vicious) : Debug Mode – Category-Based Filtering -->
<script>
jQuery(document).ready(function($) {

  function normalizeGreek(str) {
    return str.trim().toLowerCase()
      .replace(/[άΆ]/g, 'α')
      .replace(/[έΈ]/g, 'ε')
      .replace(/[ίΊ]/g, 'ι')
      .replace(/[όΌ]/g, 'ο')
      .replace(/[ύΎ]/g, 'υ')
      .replace(/[ήΉ]/g, 'η')
      .replace(/[ώΏ]/g, 'ω')
      .replace(/[^a-z0-9α-ω]+/gi, '-') // replace non-letters
      .replace(/^-+|-+$/g, '');        // trim dashes
  }

  console.log("💥 SID: Starting portfolio item scan");

  $('.et_pb_portfolio_item').each(function (index) {
    const $item = $(this);
    const rawCats = $item.find('.et_pb_portfolio_category').text();
    console.log(`🔍 Item ${index} raw category text:`, rawCats);

    const cats = rawCats.split(',');
    cats.forEach(function (cat) {
      const cleanCat = normalizeGreek(cat);
      console.log(`➕ Adding class: category-${cleanCat} to item ${index}`);
      $item.addClass(`category-${cleanCat}`);
    });
  });

  $('.sid-filter li').on('click', function () {
    const filter = $(this).data('filter');
    console.log(`🎯 Filter selected: ${filter}`);

    $('.sid-filter li').removeClass('active');
    $(this).addClass('active');

    if (filter === 'all') {
      $('.et_pb_portfolio_item').fadeIn(300);
    } else {
      $('.et_pb_portfolio_item').hide();
      const $filtered = $(`.et_pb_portfolio_item.category-${filter}`);
      console.log(`✅ Showing ${$filtered.length} items with class category-${filter}`);
      $filtered.fadeIn(300);
    }
  });

});
</script>


/* +++++++++++++++++++++++++++++++++++++++++++++++++
================================================= */

/sample
<span id="typed-text"></span>

<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script>
  var typed = new Typed('#typed-text', {
    strings: ["virable x", "virable y", "virable z"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
  });
</script>


##building

/theme Options/Integration/head
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>


/code module(page)
<h2>text ... text <span id="typed-text"></span></h2>

<script>
  var typed = new Typed('#typed-text', {
    strings: ["virable x", "virable y", "virable z"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
  });
</script>



##Structure
1.Hero Section – Fullscreen background + animated typing text

2.Intro Section – Simple welcome paragraph

3.Projects Grid – Portfolio-style layout with images and hover effects

4.Quote Section – Centered quote with large text

5.About Section – Image + text split section

6.Contact CTA – Final call-to-action with background and contact button


##build
1. Hero Section

    Layout:
        Fullwidth Section
        Background: Image (or video if you want)
        Code Module
    
    
        integration/header:
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

    codeModule:
        <h1 style="color:white; font-size:48px; text-align:center;">
        A whole different kind of <span id="typed-text"></span>
        </h1>
  
        <script>
        var typed = new Typed('#typed-text', {
        strings: ["text1", "text2", "text3"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
        });
        </script>
  

  2. Intro Section
        
        Layout:
            Regular Section
            1 Column
            Text Module

        build:
            textModule
                <p style="text-align:center; font-size:18px;">
                text.
                </p>
          
    
    3. Projects Grid Section
          
        Layout:
          Regular Section
          3 Columns
           Image Modules in each column
           Below each image, Text Module with project name
          
          hover animation: Use Transform > Scale in Divi's design options
          
          Repeat the row for more projects.
          
          Alternatively, use Divi’s Portfolio Module if you want dynamic filtering.
          
     4. Quote Section
          Layout:
           Fullwidth Section
           Background: White or light grey
           Text Module centered
          
          Text Example:
          
          html
          Copy
          Edit
          <blockquote style="text-align:center; font-size:32px; font-style:italic;">
            "Architecture begins where engineering ends." – Walter Gropius
          </blockquote>
          🟣 5. About Section
          Layout:
          
          2 Columns
          
          Left: Image Module
          
          Right: Text Module with heading, paragraph, and optional button
          
          Example Text:
          
          php-template
          Copy
          Edit
          <h2>About Us</h2>
          <p>We are a team of ........</p>
          <a class="et_pb_button" href="/about">Learn More</a>
          
          6. Contact CTA Section
          Layout:
            Fullwidth Section
            Background: Dark color or image
            centered Button Module saying “text”
          
          Final Touches
         -Scroll Effects (Divi / Advanced / Scroll Effects) for subtle movement in scroll
          
         -global fonts/colors (modern serif + sans-serif mix)
          
         -padding/margins for proper spacing between sections
          
         -responsive
