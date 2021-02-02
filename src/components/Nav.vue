<template>
  <div class="navigation">
    <div class="centerWrapper wrapper">
      <a href="https://www.wipo.int/portal/en/" target="_blank" class="logo_17mhm">
        <span class="icon_3a2GM">
          <svg viewBox="0 0 52.47 10.83" xmlns="http://www.w3.org/2000/svg">
            <g fill="#fff">
              <path d="M0 .33h2.79l2 7.47L6.94.33h2.79l2.1 7.47 2-7.47h2.79l-3.24 10.26h-2.87l-2.16-7.3-2.15 7.3H3.33zM19.37.33h2.79v10.26h-2.79zM26.26.33h6.9c2.91 0 3.62 1.74 3.62 3.12 0 2.18-1.15 3.48-3.4 3.48h-4.32v3.67h-2.79V.33zM29.05 5h3c.86 0 1.87 0 1.87-1.41s-.82-1.4-1.61-1.4h-3.25V5zM46.09 0c5.52 0 6.38 3.27 6.38 5.41s-.86 5.42-6.37 5.42-6.38-3.27-6.38-5.42S40.57 0 46.09 0zm0 8.87a3.46 3.46 0 10-3.42-3.5 3.23 3.23 0 003.42 3.47z">
              </path>
            </g>
          </svg>
        </span>
      </a>

      <ul class="nav-links">
        <li class="item"><a href="https://www3.wipo.int/contact/en/" target="_blank">Contact us</a></li>
        <li class="item"><a href="https://ipportal.wipo.int/" target="_blank">IP Portal</a></li>
        <li class="item"><a href="https://www.wipo.int/tools/en/disclaim.html" target="_blank">Terms of Use</a></li>
        <li class="item"><a href="https://www.wipo.int/tools/en/privacy_policy.html" target="_blank">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    height: 48px;
    background-color: #314668;
    background-image: linear-gradient(60deg,#75839a,#314668 33%);

    display: flex;
    z-index: 999;
  }

  .navigation .wrapper > a {
    display: block;
    position: relative;
    width: 77px;
    height: 16px;
  }

  .navigation .wrapper {
    padding-left: 24px;
    padding-right: 24px;


    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;;
  }

  .navigation .wrapper > .nav-links {
    display: flex;
    list-style-type: disc;
    margin: 0;
  }

  .navigation .wrapper > .nav-links > .item {
    list-style-type: none;
  }

  .navigation .wrapper > .nav-links > .item:not(:last-child) {
    border-right: 1px solid rgba(255, 255, 255, 0.5);
  }

  .navigation .wrapper > .nav-links > .item > a {
    position: relative;
    padding: 0 16px;
    color: #fff;
    font-size: 13px;
    font-family: Helvetica Neue,Helvetica,Liberation Sans,Arial,sans-serif;
    font-weight: 500;
    text-decoration: none;
  }
</style>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
