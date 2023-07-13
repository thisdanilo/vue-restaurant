<template>
  <section class="food_section layout_padding-bottom" id="menu">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>Menu</h2>
      </div>

      <ul class="filters_menu">
        <li class="active" data-filter="*">All</li>
      </ul>

      <div class="filters-content">
        <div class="row grid">
          <div class="col-sm-6 col-lg-4 all all">
            <div class="box">
              <div>
                <div class="img-box">
                  <img src="src/assets/images/f1.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Pizza</h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo,
                    quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div class="options">
                    <h6>$20</h6>
                    <a href="#">
                      <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <a href=""> Todo o Menu </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.detail-box a i {
  font-size: 25px;
  color: #ffffff;
}
</style>
