import React from 'react'

const Navbar = () => {
    return (
        <>
            <div data-animation="default" className="the-header w-nav" data-easing2="ease" data-theme="transparent"
                data-easing="ease" data-component-id="the-header" data-collapse="medium" role="banner" data-duration="0">
                <div className="container">
                    <div className="container-inner the-header__container-inner">
                        <a href="/">
                            <img src="/logo.png" className="the-header__logo" />
                        </a>
                        <div role="navigation" className="the-header__navigation-wrapper w-nav-menu">
                            <nav data-role="the-header-navigation" className="navigation the-header__navigation">
                                <ul role="list" className="navigation__list the-header__list">
                                    <li className="nav_item"><a href="" className="nav_link">Webflow</a></li>
                                    <li className="nav_item"><a href="" className="nav_link">Services</a></li>
                                    <li className="nav_item"><a href="" className="nav_link">Works</a></li>
                                    <li className="nav_item"><a href="" className="nav_link">Reviews</a></li>
                                    <li className="nav_item"><a href="" className="nav_link">Butler CODE</a></li>
                                    <li className="nav_item"><a href="" className="nav_link">Contacts</a></li>
                                </ul>
                            </nav>
                            <a role="button" data-a11y-dialog-show="get-quote-dialog" href="#" className="button">Get
                                quote
                            </a>
                        </div>
                        <div data-role="menu-button" className="menu-button w-nav-button">
                            <div className="menu-button__icon-wrapper w-embed">
                                <svg className="menu-button__icon" viewBox="-12 -12 120 120">
                                    <path className="menu-button__line" d="m 18 39 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-component-id="the-menu" class="the-menu">
                <nav class="navigation">
                    <ul role="list" class="navigation__list">
                        <li class="navigation__item"><a href="" class="navigation__link"><span class="chip chip--sm">PRO</span> Webflow</a></li>
                        <li class="navigation__item"><a href="/#services" class="navigation__link">Services</a></li>
                        <li class="navigation__item"><a href="" class="navigation__link">Works</a></li>
                        <li class="navigation__item"><a href="" aria-current="page" class="navigation__link w--current">Reviews</a></li>
                        <li class="navigation__item"><a href="" class="navigation__link">Butler&nbsp;CODE</a></li>
                        <li class="navigation__item"><a href="" class="navigation__link">Contacts</a></li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default Navbar