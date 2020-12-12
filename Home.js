import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
              <div className="home">
           <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
           <div className="home__row">
               <Product 
           id = "136728234"
           title = "The Learn StartUp: How to Constant Innovation Creates Radically Successfull Businesses Paperback"
           price = {11.78}
           rating = {5}
           image = "https://m.media-amazon.com/images/I/71kLrGElbOL._AC_UY218_.jpg"
           >
           </Product>
           <Product 
           id = "136728234"
           title = "SanLidA Stand Mixer, Metal Shell Series 6.5Qt. 10-Speed Kitchen Electric Mixer with Dishwasher-Safe Dough Hooks, Flat Beaters, Whisk"
           price = {11.78}
           rating = {5}
           image = "https://m.media-amazon.com/images/I/61havQSyljL._QL65_AC_UL640_.jpg"
           >
           </Product>
           </div>
           <div className="home__row">
               <Product 
           id = "136728234"
           title = "YAMAY Smart Watch Fitness Tracker Watches for Men Women, Fitness Watch Heart Rate Monitor IP68 Waterproof Digital Watch with Step"
           price = {11.78}
           rating = {5}
           image = "https://m.media-amazon.com/images/I/61uCuln0wtL._QL65_AC_UL640_.jpg"
           >
           </Product>
           <Product 
           id = "136728234"
           title = "Bluetooth Speakerphone – eMeet Luna Updated AI Noise Reduction Algorithm Featured, Daisy Chain, USB"
           price = {116.78}
           rating = {4}
           image = "https://m.media-amazon.com/images/I/71weXCJHWfL._QL65_AC_UL640_.jpg"
           >
           </Product>
           <Product 
           id = "136728234"
           title = "SwitchEasy CoverBuddy Case for iPad Pro 12.9 Inch 2020 (4th Generation) & 2018 This is the flagman of the Apple"
           price = {1999.78}
           rating = {5}
           image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQo2aJjOrGps_RsqAKkbKjBSM3bi5c47PghBA&usqp=CAU"
           >
           </Product>
           </div>
           <div className="home__row">
               <Product className="product__odyssey"
           id = "136728234"
           title = "Samsung 27-Inch CRG5 240Hz Curved Gaming Monitor (LC27RG50FQNXZA) – Computer Monitor, 1920 x 1080p Resolution, 4ms Response Time, G-Sync Compatible, HDMI,Black"
           price = {3600.78}
           rating = {4}
           image = "https://images.samsung.com/is/image/samsung/my-odyssey-g9-lc49g95tssexxm-frontwhite-254738308?$PD_GALLERY_L_JPG$"
           >
           </Product>
           </div>
        </div>
        </div>
    )
}

export default Home
