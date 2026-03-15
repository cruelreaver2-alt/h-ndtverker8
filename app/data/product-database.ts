// Product Database - Category-specific product suggestions
// This database provides autocomplete suggestions based on job category

export interface Product {
  name: string;
  category: string;
  brand?: string;
  description?: string;
  priceRange?: string;
  imageUrl?: string;
  type?: string;
  capacity?: string;
  popular?: boolean; // Popular/featured products
}

// Product images organized by category
const productImages = {
  // Varmepumpe
  heatPumpIndoor: 'https://images.unsplash.com/photo-1649707088786-792340244a33?w=400',
  heatPumpOutdoor: 'https://images.unsplash.com/photo-1770318724110-c9d426f2125e?w=400',
  heatPumpGround: 'https://images.unsplash.com/photo-1650530224334-476083f65bdd?w=400',
  heatPumpAirWater: 'https://images.unsplash.com/photo-1760886810583-dbb87686d08c?w=400',
  heatPumpModern: 'https://images.unsplash.com/photo-1771860007875-2ca3ecefd24d?w=400',
  heatPumpSplit: 'https://images.unsplash.com/photo-1758545814875-c2f0a0c89943?w=400',
  heatPumpMitsubishi: 'https://images.unsplash.com/photo-1760560131262-dbbba7943cbd?w=400',
  heatPumpLG: 'https://images.unsplash.com/photo-1759772238012-9d5ad59ae637?w=400',
  heatPumpHVAC: 'https://images.unsplash.com/photo-1773558048595-0eb9c121f119?w=400',
  
  // Baderomsrenovering
  bathroomSink: 'https://images.unsplash.com/photo-1771681744660-d3ff70bc24a2?w=400',
  toilet: 'https://images.unsplash.com/photo-1609946860422-5e9cefc924ae?w=400',
  showerHead: 'https://images.unsplash.com/photo-1761353855019-05f2f3ed9c43?w=400',
  bathroomFaucet: 'https://images.unsplash.com/photo-1773177930292-463ca3c5b86a?w=400',
  bathroomTiles: 'https://images.unsplash.com/photo-1590880265945-6b43effeb599?w=400',
  
  // Garasjeport
  garageDoor: 'https://images.unsplash.com/photo-1762568742298-bdb91e2cbdd9?w=400',
  garageOpener: 'https://images.unsplash.com/photo-1675747158954-4a32e28812c0?w=400',
  garageSectional: 'https://images.unsplash.com/photo-1680768805827-3a3227dd1176?w=400',
  
  // Rør
  kitchenFaucet: 'https://images.unsplash.com/photo-1773177930149-48a2f5df9e07?w=400',
  waterHeater: 'https://images.unsplash.com/photo-1769433360594-ec48a59b58bb?w=400',
  plumbingPipes: 'https://images.unsplash.com/photo-1694827893591-af9b80361599?w=400',
  
  // Elektrisk
  electricalOutlet: 'https://images.unsplash.com/photo-1728971825338-be9230fd4029?w=400',
  lightSwitch: 'https://images.unsplash.com/photo-1590327813360-fdbca9ec1cc6?w=400',
  ledStrip: 'https://images.unsplash.com/photo-1528922087877-3f44f53a8f7d?w=400',
  dimmer: 'https://images.unsplash.com/photo-1761479373576-ad4c1c5bb9af?w=400',
  
  // Maling
  paintBucket: 'https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?w=400',
  paintRoller: 'https://images.unsplash.com/photo-1693985120993-e9b203ce7631?w=400',
  woodStain: 'https://images.unsplash.com/photo-1658264250874-52f403e2ebaa?w=400',
  
  // Trevare
  woodDeck: 'https://images.unsplash.com/photo-1520697703789-6ecd9fb2b991?w=400',
  woodPlanks: 'https://images.unsplash.com/photo-1765435149551-4a34bf2eb7d6?w=400',
  hardwoodFloor: 'https://images.unsplash.com/photo-1627936723017-35a620dc70b7?w=400',
  laminateFloor: 'https://images.unsplash.com/photo-1770086962001-3da4f60e7db5?w=400',
  
  // Entreprenør
  gravel: 'https://images.unsplash.com/photo-1704175970211-4c2c15b18328?w=400',
  sand: 'https://images.unsplash.com/photo-1686358244601-f6e65f67d4c6?w=400',
  asphalt: 'https://images.unsplash.com/photo-1708117242652-25dc76c4b30c?w=400',
  drainagePipe: 'https://images.unsplash.com/photo-1765883644159-de4bed719d06?w=400',
};

export const productDatabase: Record<string, Product[]> = {
  // ==========================================
  // VARMEPUMPE (100+ produkter)
  // ==========================================
  'varmepumpe': [
    // NIBE - Norges mest populære merke
    { name: 'Nibe Fighter 2120 luft/luft 5 kW', category: 'varmepumpe', brand: 'Nibe', type: 'luft-luft', capacity: '5 kW', priceRange: '25 000 - 35 000 kr', imageUrl: productImages.heatPumpIndoor, popular: true },
    { name: 'Nibe Fighter 2120 luft/luft 7 kW', category: 'varmepumpe', brand: 'Nibe', type: 'luft-luft', capacity: '7 kW', priceRange: '28 000 - 38 000 kr', imageUrl: productImages.heatPumpIndoor },
    { name: 'Nibe Fighter 2120 luft/luft 12 kW', category: 'varmepumpe', brand: 'Nibe', type: 'luft-luft', capacity: '12 kW', priceRange: '35 000 - 50 000 kr', imageUrl: productImages.heatPumpIndoor },
    { name: 'Nibe F2120 luft/vann 8 kW', category: 'varmepumpe', brand: 'Nibe', type: 'luft-vann', capacity: '8 kW', priceRange: '90 000 - 130 000 kr', imageUrl: productImages.heatPumpAirWater, popular: true },
    { name: 'Nibe F2120 luft/vann 12 kW', category: 'varmepumpe', brand: 'Nibe', type: 'luft-vann', capacity: '12 kW', priceRange: '100 000 - 140 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'Nibe F2120 luft/vann 16 kW', category: 'varmepumpe', brand: 'Nibe', type: 'luft-vann', capacity: '16 kW', priceRange: '110 000 - 150 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'Nibe F1155 luft/vann 6 kW', category: 'varmepumpe', brand: 'Nibe', type: 'luft-vann', capacity: '6 kW', priceRange: '80 000 - 120 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'Nibe F1155 luft/vann 9 kW', category: 'varmepumpe', brand: 'Nibe', type: 'luft-vann', capacity: '9 kW', priceRange: '90 000 - 130 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'Nibe F1155 luft/vann 12 kW', category: 'varmepumpe', brand: 'Nibe', type: 'luft-vann', capacity: '12 kW', priceRange: '100 000 - 140 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'Nibe F1245 luft/vann 8 kW', category: 'varmepumpe', brand: 'Nibe', type: 'luft-vann', capacity: '8 kW', priceRange: '95 000 - 135 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'Nibe F1245 luft/vann 10 kW', category: 'varmepumpe', brand: 'Nibe', type: 'luft-vann', capacity: '10 kW', priceRange: '100 000 - 140 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'Nibe F1345 luft/vann 16 kW', category: 'varmepumpe', brand: 'Nibe', type: 'luft-vann', capacity: '16 kW', priceRange: '130 000 - 170 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'Nibe F1155 bergvarme 6 kW', category: 'varmepumpe', brand: 'Nibe', type: 'bergvarme', capacity: '6 kW', priceRange: '120 000 - 180 000 kr', imageUrl: productImages.heatPumpGround, popular: true },
    { name: 'Nibe F1155 bergvarme 9 kW', category: 'varmepumpe', brand: 'Nibe', type: 'bergvarme', capacity: '9 kW', priceRange: '130 000 - 190 000 kr', imageUrl: productImages.heatPumpGround },
    { name: 'Nibe F1155 bergvarme 12 kW', category: 'varmepumpe', brand: 'Nibe', type: 'bergvarme', capacity: '12 kW', priceRange: '140 000 - 200 000 kr', imageUrl: productImages.heatPumpGround },
    { name: 'Nibe F1255 bergvarme 12 kW', category: 'varmepumpe', brand: 'Nibe', type: 'bergvarme', capacity: '12 kW', priceRange: '150 000 - 210 000 kr', imageUrl: productImages.heatPumpGround },
    { name: 'Nibe F1255 bergvarme 16 kW', category: 'varmepumpe', brand: 'Nibe', type: 'bergvarme', capacity: '16 kW', priceRange: '160 000 - 220 000 kr', imageUrl: productImages.heatPumpGround },
    { name: 'Nibe S1155 bergvarme 6 kW', category: 'varmepumpe', brand: 'Nibe', type: 'bergvarme', capacity: '6 kW', priceRange: '110 000 - 170 000 kr', imageUrl: productImages.heatPumpGround },
    { name: 'Nibe S1255 bergvarme 12 kW', category: 'varmepumpe', brand: 'Nibe', type: 'bergvarme', capacity: '12 kW', priceRange: '140 000 - 200 000 kr', imageUrl: productImages.heatPumpGround },

    // MITSUBISHI ELECTRIC
    { name: 'Mitsubishi MSZ-AP25VG luft/luft 2,5 kW', category: 'varmepumpe', brand: 'Mitsubishi Electric', type: 'luft-luft', capacity: '2,5 kW', priceRange: '20 000 - 30 000 kr', imageUrl: productImages.heatPumpMitsubishi, popular: true },
    { name: 'Mitsubishi MSZ-AP35VG luft/luft 3,5 kW', category: 'varmepumpe', brand: 'Mitsubishi Electric', type: 'luft-luft', capacity: '3,5 kW', priceRange: '22 000 - 32 000 kr', imageUrl: productImages.heatPumpMitsubishi },
    { name: 'Mitsubishi MSZ-AP42VG luft/luft 4,2 kW', category: 'varmepumpe', brand: 'Mitsubishi Electric', type: 'luft-luft', capacity: '4,2 kW', priceRange: '25 000 - 35 000 kr', imageUrl: productImages.heatPumpMitsubishi },
    { name: 'Mitsubishi MSZ-AP50VG luft/luft 5,0 kW', category: 'varmepumpe', brand: 'Mitsubishi Electric', type: 'luft-luft', capacity: '5,0 kW', priceRange: '28 000 - 38 000 kr', imageUrl: productImages.heatPumpMitsubishi },
    { name: 'Mitsubishi MSZ-EF25VG luft/luft 2,5 kW', category: 'varmepumpe', brand: 'Mitsubishi Electric', type: 'luft-luft', capacity: '2,5 kW', priceRange: '24 000 - 34 000 kr', imageUrl: productImages.heatPumpMitsubishi },
    { name: 'Mitsubishi MSZ-EF35VG luft/luft 3,5 kW', category: 'varmepumpe', brand: 'Mitsubishi Electric', type: 'luft-luft', capacity: '3,5 kW', priceRange: '27 000 - 37 000 kr', imageUrl: productImages.heatPumpMitsubishi },
    { name: 'Mitsubishi MSZ-LN25VG luft/luft Premium 2,5 kW', category: 'varmepumpe', brand: 'Mitsubishi Electric', type: 'luft-luft', capacity: '2,5 kW', priceRange: '30 000 - 42 000 kr', imageUrl: productImages.heatPumpMitsubishi },
    { name: 'Mitsubishi MSZ-LN35VG luft/luft Premium 3,5 kW', category: 'varmepumpe', brand: 'Mitsubishi Electric', type: 'luft-luft', capacity: '3,5 kW', priceRange: '33 000 - 45 000 kr', imageUrl: productImages.heatPumpMitsubishi },
    { name: 'Mitsubishi Ecodan luft/vann 8 kW', category: 'varmepumpe', brand: 'Mitsubishi Electric', type: 'luft-vann', capacity: '8 kW', priceRange: '95 000 - 135 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'Mitsubishi Ecodan luft/vann 11 kW', category: 'varmepumpe', brand: 'Mitsubishi Electric', type: 'luft-vann', capacity: '11 kW', priceRange: '105 000 - 145 000 kr', imageUrl: productImages.heatPumpAirWater },

    // PANASONIC
    { name: 'Panasonic Etherea CS-Z25XKEW 2,5 kW', category: 'varmepumpe', brand: 'Panasonic', type: 'luft-luft', capacity: '2,5 kW', priceRange: '28 000 - 40 000 kr', imageUrl: productImages.heatPumpModern, popular: true },
    { name: 'Panasonic Etherea CS-Z35XKEW 3,5 kW', category: 'varmepumpe', brand: 'Panasonic', type: 'luft-luft', capacity: '3,5 kW', priceRange: '32 000 - 44 000 kr', imageUrl: productImages.heatPumpModern },
    { name: 'Panasonic Etherea CS-Z50XKEW 5,0 kW', category: 'varmepumpe', brand: 'Panasonic', type: 'luft-luft', capacity: '5,0 kW', priceRange: '36 000 - 48 000 kr', imageUrl: productImages.heatPumpModern },
    { name: 'Panasonic Econavi CS-TZ25WKEW 2,5 kW', category: 'varmepumpe', brand: 'Panasonic', type: 'luft-luft', capacity: '2,5 kW', priceRange: '22 000 - 32 000 kr', imageUrl: productImages.heatPumpModern },
    { name: 'Panasonic Econavi CS-TZ35WKEW 3,5 kW', category: 'varmepumpe', brand: 'Panasonic', type: 'luft-luft', capacity: '3,5 kW', priceRange: '25 000 - 35 000 kr', imageUrl: productImages.heatPumpModern },
    { name: 'Panasonic Compact CS-MZ20WKE 2,0 kW', category: 'varmepumpe', brand: 'Panasonic', type: 'luft-luft', capacity: '2,0 kW', priceRange: '18 000 - 28 000 kr', imageUrl: productImages.heatPumpModern },
    { name: 'Panasonic Aquarea luft/vann 9 kW', category: 'varmepumpe', brand: 'Panasonic', type: 'luft-vann', capacity: '9 kW', priceRange: '100 000 - 140 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'Panasonic Aquarea luft/vann 12 kW', category: 'varmepumpe', brand: 'Panasonic', type: 'luft-vann', capacity: '12 kW', priceRange: '110 000 - 150 000 kr', imageUrl: productImages.heatPumpAirWater },

    // DAIKIN
    { name: 'Daikin Emura FTXJ25AW 2,5 kW', category: 'varmepumpe', brand: 'Daikin', type: 'luft-luft', capacity: '2,5 kW', priceRange: '30 000 - 45 000 kr', imageUrl: productImages.heatPumpSplit, popular: true },
    { name: 'Daikin Emura FTXJ35AW 3,5 kW', category: 'varmepumpe', brand: 'Daikin', type: 'luft-luft', capacity: '3,5 kW', priceRange: '33 000 - 48 000 kr', imageUrl: productImages.heatPumpSplit },
    { name: 'Daikin Emura FTXJ50AW 5,0 kW', category: 'varmepumpe', brand: 'Daikin', type: 'luft-luft', capacity: '5,0 kW', priceRange: '36 000 - 50 000 kr', imageUrl: productImages.heatPumpSplit },
    { name: 'Daikin Perfera FTXM25R 2,5 kW', category: 'varmepumpe', brand: 'Daikin', type: 'luft-luft', capacity: '2,5 kW', priceRange: '25 000 - 35 000 kr', imageUrl: productImages.heatPumpSplit },
    { name: 'Daikin Perfera FTXM35R 3,5 kW', category: 'varmepumpe', brand: 'Daikin', type: 'luft-luft', capacity: '3,5 kW', priceRange: '28 000 - 38 000 kr', imageUrl: productImages.heatPumpSplit },
    { name: 'Daikin Stylish FTXA25AW 2,5 kW', category: 'varmepumpe', brand: 'Daikin', type: 'luft-luft', capacity: '2,5 kW', priceRange: '26 000 - 36 000 kr', imageUrl: productImages.heatPumpSplit },
    { name: 'Daikin Comfora FTXP25M 2,5 kW', category: 'varmepumpe', brand: 'Daikin', type: 'luft-luft', capacity: '2,5 kW', priceRange: '20 000 - 30 000 kr', imageUrl: productImages.heatPumpSplit },
    { name: 'Daikin Altherma luft/vann 11 kW', category: 'varmepumpe', brand: 'Daikin', type: 'luft-vann', capacity: '11 kW', priceRange: '110 000 - 150 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'Daikin Altherma luft/vann 14 kW', category: 'varmepumpe', brand: 'Daikin', type: 'luft-vann', capacity: '14 kW', priceRange: '120 000 - 160 000 kr', imageUrl: productImages.heatPumpAirWater },

    // LG
    { name: 'LG Artcool Mirror AC09BQ 2,5 kW', category: 'varmepumpe', brand: 'LG', type: 'luft-luft', capacity: '2,5 kW', priceRange: '25 000 - 38 000 kr', imageUrl: productImages.heatPumpLG },
    { name: 'LG Artcool Mirror AC12BQ 3,5 kW', category: 'varmepumpe', brand: 'LG', type: 'luft-luft', capacity: '3,5 kW', priceRange: '28 000 - 40 000 kr', imageUrl: productImages.heatPumpLG },
    { name: 'LG Standard Plus PC09SQ 2,5 kW', category: 'varmepumpe', brand: 'LG', type: 'luft-luft', capacity: '2,5 kW', priceRange: '20 000 - 30 000 kr', imageUrl: productImages.heatPumpLG },
    { name: 'LG Standard Plus PC12SQ 3,5 kW', category: 'varmepumpe', brand: 'LG', type: 'luft-luft', capacity: '3,5 kW', priceRange: '23 000 - 33 000 kr', imageUrl: productImages.heatPumpLG },
    { name: 'LG Deluxe DC09RQ 2,5 kW', category: 'varmepumpe', brand: 'LG', type: 'luft-luft', capacity: '2,5 kW', priceRange: '24 000 - 34 000 kr', imageUrl: productImages.heatPumpLG },
    { name: 'LG Therma V luft/vann 9 kW', category: 'varmepumpe', brand: 'LG', type: 'luft-vann', capacity: '9 kW', priceRange: '95 000 - 135 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'LG Therma V luft/vann 12 kW', category: 'varmepumpe', brand: 'LG', type: 'luft-vann', capacity: '12 kW', priceRange: '105 000 - 145 000 kr', imageUrl: productImages.heatPumpAirWater },

    // THERMIA
    { name: 'Thermia Atec luft/vann 8 kW', category: 'varmepumpe', brand: 'Thermia', type: 'luft-vann', capacity: '8 kW', priceRange: '90 000 - 130 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'Thermia Atec luft/vann 12 kW', category: 'varmepumpe', brand: 'Thermia', type: 'luft-vann', capacity: '12 kW', priceRange: '100 000 - 140 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'Thermia Diplomat luft/vann 10 kW', category: 'varmepumpe', brand: 'Thermia', type: 'luft-vann', capacity: '10 kW', priceRange: '110 000 - 150 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'Thermia Robust bergvarme 9 kW', category: 'varmepumpe', brand: 'Thermia', type: 'bergvarme', capacity: '9 kW', priceRange: '130 000 - 190 000 kr', imageUrl: productImages.heatPumpGround },
    { name: 'Thermia Robust bergvarme 12 kW', category: 'varmepumpe', brand: 'Thermia', type: 'bergvarme', capacity: '12 kW', priceRange: '140 000 - 200 000 kr', imageUrl: productImages.heatPumpGround },

    // CTC
    { name: 'CTC EcoAir luft/vann 6 kW', category: 'varmepumpe', brand: 'CTC', type: 'luft-vann', capacity: '6 kW', priceRange: '85 000 - 125 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'CTC EcoAir luft/vann 10 kW', category: 'varmepumpe', brand: 'CTC', type: 'luft-vann', capacity: '10 kW', priceRange: '95 000 - 135 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'CTC EcoPart i430 bergvarme 8 kW', category: 'varmepumpe', brand: 'CTC', type: 'bergvarme', capacity: '8 kW', priceRange: '100 000 - 150 000 kr', imageUrl: productImages.heatPumpGround },
    { name: 'CTC EcoPart i430 bergvarme 12 kW', category: 'varmepumpe', brand: 'CTC', type: 'bergvarme', capacity: '12 kW', priceRange: '120 000 - 170 000 kr', imageUrl: productImages.heatPumpGround },
    { name: 'CTC EcoZenith bergvarme 9 kW', category: 'varmepumpe', brand: 'CTC', type: 'bergvarme', capacity: '9 kW', priceRange: '110 000 - 160 000 kr', imageUrl: productImages.heatPumpGround },

    // IVT
    { name: 'IVT AirX luft/vann 7 kW', category: 'varmepumpe', brand: 'IVT', type: 'luft-vann', capacity: '7 kW', priceRange: '80 000 - 120 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'IVT AirX luft/vann 10 kW', category: 'varmepumpe', brand: 'IVT', type: 'luft-vann', capacity: '10 kW', priceRange: '90 000 - 130 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'IVT Greenline HE bergvarme 6 kW', category: 'varmepumpe', brand: 'IVT', type: 'bergvarme', capacity: '6 kW', priceRange: '70 000 - 100 000 kr', imageUrl: productImages.heatPumpGround },
    { name: 'IVT Greenline HE bergvarme 9 kW', category: 'varmepumpe', brand: 'IVT', type: 'bergvarme', capacity: '9 kW', priceRange: '85 000 - 125 000 kr', imageUrl: productImages.heatPumpGround },
    { name: 'IVT Nordic bergvarme 12 kW', category: 'varmepumpe', brand: 'IVT', type: 'bergvarme', capacity: '12 kW', priceRange: '95 000 - 135 000 kr', imageUrl: productImages.heatPumpGround },

    // TOSHIBA
    { name: 'Toshiba Haori RAS-B13N4KVRG 3,5 kW', category: 'varmepumpe', brand: 'Toshiba', type: 'luft-luft', capacity: '3,5 kW', priceRange: '30 000 - 42 000 kr', imageUrl: productImages.heatPumpIndoor },
    { name: 'Toshiba Shorai RAS-B10PKVSG 2,5 kW', category: 'varmepumpe', brand: 'Toshiba', type: 'luft-luft', capacity: '2,5 kW', priceRange: '26 000 - 36 000 kr', imageUrl: productImages.heatPumpIndoor },
    { name: 'Toshiba Seiya RAS-B13TKVG 3,5 kW', category: 'varmepumpe', brand: 'Toshiba', type: 'luft-luft', capacity: '3,5 kW', priceRange: '22 000 - 32 000 kr', imageUrl: productImages.heatPumpIndoor },

    // FUJITSU
    { name: 'Fujitsu Design ASYG09KETA 2,5 kW', category: 'varmepumpe', brand: 'Fujitsu', type: 'luft-luft', capacity: '2,5 kW', priceRange: '24 000 - 34 000 kr', imageUrl: productImages.heatPumpModern },
    { name: 'Fujitsu Design ASYG12KETA 3,5 kW', category: 'varmepumpe', brand: 'Fujitsu', type: 'luft-luft', capacity: '3,5 kW', priceRange: '27 000 - 37 000 kr', imageUrl: productImages.heatPumpModern },
    { name: 'Fujitsu Classic ASYG09KMCC 2,5 kW', category: 'varmepumpe', brand: 'Fujitsu', type: 'luft-luft', capacity: '2,5 kW', priceRange: '20 000 - 30 000 kr', imageUrl: productImages.heatPumpModern },

    // HITACHI
    { name: 'Hitachi Summit RAK-25RXE 2,5 kW', category: 'varmepumpe', brand: 'Hitachi', type: 'luft-luft', capacity: '2,5 kW', priceRange: '23 000 - 33 000 kr', imageUrl: productImages.heatPumpSplit },
    { name: 'Hitachi Performance RAK-35RPE 3,5 kW', category: 'varmepumpe', brand: 'Hitachi', type: 'luft-luft', capacity: '3,5 kW', priceRange: '26 000 - 36 000 kr', imageUrl: productImages.heatPumpSplit },

    // GREE
    { name: 'Gree Amber 2,6 kW', category: 'varmepumpe', brand: 'Gree', type: 'luft-luft', capacity: '2,6 kW', priceRange: '18 000 - 26 000 kr', imageUrl: productImages.heatPumpIndoor },
    { name: 'Gree Lomo 3,5 kW', category: 'varmepumpe', brand: 'Gree', type: 'luft-luft', capacity: '3,5 kW', priceRange: '20 000 - 28 000 kr', imageUrl: productImages.heatPumpIndoor },
    { name: 'Gree Fairy 5,0 kW', category: 'varmepumpe', brand: 'Gree', type: 'luft-luft', capacity: '5,0 kW', priceRange: '22 000 - 32 000 kr', imageUrl: productImages.heatPumpIndoor },

    // BOSCH
    { name: 'Bosch Compress 3000 luft/vann 7 kW', category: 'varmepumpe', brand: 'Bosch', type: 'luft-vann', capacity: '7 kW', priceRange: '90 000 - 130 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'Bosch Climate 5000 luft/luft 2,6 kW', category: 'varmepumpe', brand: 'Bosch', type: 'luft-luft', capacity: '2,6 kW', priceRange: '22 000 - 32 000 kr', imageUrl: productImages.heatPumpHVAC },

    // SAMSUNG
    { name: 'Samsung WindFree Comfort 2,5 kW', category: 'varmepumpe', brand: 'Samsung', type: 'luft-luft', capacity: '2,5 kW', priceRange: '26 000 - 36 000 kr', imageUrl: productImages.heatPumpModern },
    { name: 'Samsung WindFree Elite 3,5 kW', category: 'varmepumpe', brand: 'Samsung', type: 'luft-luft', capacity: '3,5 kW', priceRange: '30 000 - 42 000 kr', imageUrl: productImages.heatPumpModern },

    // CARRIER
    { name: 'Carrier Pearl 2,6 kW', category: 'varmepumpe', brand: 'Carrier', type: 'luft-luft', capacity: '2,6 kW', priceRange: '24 000 - 34 000 kr', imageUrl: productImages.heatPumpSplit },
    { name: 'Carrier Aquasnap luft/vann 8 kW', category: 'varmepumpe', brand: 'Carrier', type: 'luft-vann', capacity: '8 kW', priceRange: '95 000 - 135 000 kr', imageUrl: productImages.heatPumpAirWater },

    // ALPHA INNOTEC
    { name: 'Alpha Innotec LWAV luft/vann 7 kW', category: 'varmepumpe', brand: 'Alpha Innotec', type: 'luft-vann', capacity: '7 kW', priceRange: '85 000 - 125 000 kr', imageUrl: productImages.heatPumpAirWater },
    { name: 'Alpha Innotec SW bergvarme 10 kW', category: 'varmepumpe', brand: 'Alpha Innotec', type: 'bergvarme', capacity: '10 kW', priceRange: '115 000 - 165 000 kr', imageUrl: productImages.heatPumpGround },
  ],

  // ==========================================
  // BADEROMSRENOVERING (60+ produkter)
  // ==========================================
  'Baderomsrenovering': [
    // SERVANTER
    { name: 'Porsgrunn Kvist servant 60 cm', category: 'Baderomsrenovering', brand: 'Porsgrunn', type: 'servant', priceRange: '3 000 - 5 000 kr', imageUrl: productImages.bathroomSink, popular: true },
    { name: 'Porsgrunn Kvist servant 80 cm', category: 'Baderomsrenovering', brand: 'Porsgrunn', type: 'servant', priceRange: '3 500 - 5 500 kr', imageUrl: productImages.bathroomSink },
    { name: 'Porsgrunn Repose servant 50 cm', category: 'Baderomsrenovering', brand: 'Porsgrunn', type: 'servant', priceRange: '2 500 - 4 000 kr', imageUrl: productImages.bathroomSink },
    { name: 'Villeroy & Boch Subway 3.0 servant 60 cm', category: 'Baderomsrenovering', brand: 'Villeroy & Boch', type: 'servant', priceRange: '4 500 - 7 000 kr', imageUrl: productImages.bathroomSink, popular: true },
    { name: 'Villeroy & Boch Architectura servant 55 cm', category: 'Baderomsrenovering', brand: 'Villeroy & Boch', type: 'servant', priceRange: '3 500 - 5 500 kr', imageUrl: productImages.bathroomSink },
    { name: 'Duravit D-Code servant 60 cm', category: 'Baderomsrenovering', brand: 'Duravit', type: 'servant', priceRange: '3 000 - 5 000 kr', imageUrl: productImages.bathroomSink },
    { name: 'Gustavsberg Artic servant 60 cm', category: 'Baderomsrenovering', brand: 'Gustavsberg', type: 'servant', priceRange: '2 800 - 4 500 kr', imageUrl: productImages.bathroomSink },
    { name: 'IDO Glow servant 61 cm', category: 'Baderomsrenovering', brand: 'IDO', type: 'servant', priceRange: '2 500 - 4 000 kr', imageUrl: productImages.bathroomSink },

    // TOALETTER
    { name: 'Villeroy & Boch O.novo toalett', category: 'Baderomsrenovering', brand: 'Villeroy & Boch', type: 'toalett', priceRange: '4 000 - 6 000 kr', imageUrl: productImages.toilet, popular: true },
    { name: 'Villeroy & Boch Subway 2.0 toalett', category: 'Baderomsrenovering', brand: 'Villeroy & Boch', type: 'toalett', priceRange: '5 000 - 7 500 kr', imageUrl: productImages.toilet },
    { name: 'IDO Seven D toalett', category: 'Baderomsrenovering', brand: 'IDO', type: 'toalett', priceRange: '3 500 - 5 500 kr', imageUrl: productImages.toilet, popular: true },
    { name: 'IDO Glow Rimfree toalett', category: 'Baderomsrenovering', brand: 'IDO', type: 'toalett', priceRange: '4 000 - 6 500 kr', imageUrl: productImages.toilet },
    { name: 'Geberit Sigma innfellingstoalett', category: 'Baderomsrenovering', brand: 'Geberit', type: 'toalett', priceRange: '5 000 - 8 000 kr', imageUrl: productImages.toilet },
    { name: 'Ifö Spira toalett', category: 'Baderomsrenovering', brand: 'Ifö', type: 'toalett', priceRange: '3 000 - 4 500 kr', imageUrl: productImages.toilet },
    { name: 'Ifö Sign toalett Rimfree', category: 'Baderomsrenovering', brand: 'Ifö', type: 'toalett', priceRange: '3 500 - 5 500 kr', imageUrl: productImages.toilet },
    { name: 'Gustavsberg Nordic toalett', category: 'Baderomsrenovering', brand: 'Gustavsberg', type: 'toalett', priceRange: '3 200 - 5 000 kr', imageUrl: productImages.toilet },
    { name: 'Duravit D-Code toalett', category: 'Baderomsrenovering', brand: 'Duravit', type: 'toalett', priceRange: '4 000 - 6 000 kr', imageUrl: productImages.toilet },

    // DUSJSETT
    { name: 'Grohe Eurosmart dusjsett', category: 'Baderomsrenovering', brand: 'Grohe', type: 'dusjsett', priceRange: '2 500 - 4 000 kr', imageUrl: productImages.showerHead, popular: true },
    { name: 'Grohe Tempesta dusjsett', category: 'Baderomsrenovering', brand: 'Grohe', type: 'dusjsett', priceRange: '2 000 - 3 500 kr', imageUrl: productImages.showerHead },
    { name: 'Grohe Rainshower dusjsett', category: 'Baderomsrenovering', brand: 'Grohe', type: 'dusjsett', priceRange: '3 500 - 5 500 kr', imageUrl: productImages.showerHead },
    { name: 'Mora Armatur Inxx dusjsett', category: 'Baderomsrenovering', brand: 'Mora', type: 'dusjsett', priceRange: '2 500 - 4 500 kr', imageUrl: productImages.showerHead },
    { name: 'Mora MMIX dusjsett', category: 'Baderomsrenovering', brand: 'Mora', type: 'dusjsett', priceRange: '2 200 - 3 800 kr', imageUrl: productImages.showerHead },
    { name: 'Oras Safira dusjsett', category: 'Baderomsrenovering', brand: 'Oras', type: 'dusjsett', priceRange: '2 000 - 3 500 kr', imageUrl: productImages.showerHead },
    { name: 'Hansgrohe Croma dusjsett', category: 'Baderomsrenovering', brand: 'Hansgrohe', type: 'dusjsett', priceRange: '3 000 - 5 000 kr', imageUrl: productImages.showerHead },

    // BLANDEBATTERIER
    { name: 'Oras Safira baderomsbatteri', category: 'Baderomsrenovering', brand: 'Oras', type: 'batteri', priceRange: '2 000 - 3 500 kr', imageUrl: productImages.bathroomFaucet, popular: true },
    { name: 'Oras Inspera baderomsbatteri', category: 'Baderomsrenovering', brand: 'Oras', type: 'batteri', priceRange: '2 500 - 4 000 kr', imageUrl: productImages.bathroomFaucet },
    { name: 'Grohe Eurosmart baderomsbatteri', category: 'Baderomsrenovering', brand: 'Grohe', type: 'batteri', priceRange: '2 200 - 3 800 kr', imageUrl: productImages.bathroomFaucet },
    { name: 'Grohe Euroeco baderomsbatteri', category: 'Baderomsrenovering', brand: 'Grohe', type: 'batteri', priceRange: '1 800 - 3 000 kr', imageUrl: productImages.bathroomFaucet },
    { name: 'Mora Armatur Inxx baderomsbatteri', category: 'Baderomsrenovering', brand: 'Mora', type: 'batteri', priceRange: '2 300 - 3 800 kr', imageUrl: productImages.bathroomFaucet },
    { name: 'Mora MMIX baderomsbatteri', category: 'Baderomsrenovering', brand: 'Mora', type: 'batteri', priceRange: '2 000 - 3 500 kr', imageUrl: productImages.bathroomFaucet },
    { name: 'Hansgrohe Focus baderomsbatteri', category: 'Baderomsrenovering', brand: 'Hansgrohe', type: 'batteri', priceRange: '2 500 - 4 200 kr', imageUrl: productImages.bathroomFaucet },

    // FLIS OG KLINKER
    { name: 'Baderomsflis Hvit Matt 30x60 cm', category: 'Baderomsrenovering', type: 'flis', priceRange: '300 - 500 kr/m²', imageUrl: productImages.bathroomTiles, popular: true },
    { name: 'Baderomsflis Grå Blank 25x50 cm', category: 'Baderomsrenovering', type: 'flis', priceRange: '250 - 450 kr/m²', imageUrl: productImages.bathroomTiles },
    { name: 'Baderomsflis Marmor-look 60x60 cm', category: 'Baderomsrenovering', type: 'flis', priceRange: '500 - 800 kr/m²', imageUrl: productImages.bathroomTiles },
    { name: 'Baderomsflis Betong-look 30x90 cm', category: 'Baderomsrenovering', type: 'flis', priceRange: '400 - 700 kr/m²', imageUrl: productImages.bathroomTiles },
    { name: 'Mosaikk Hvit 30x30 cm', category: 'Baderomsrenovering', type: 'flis', priceRange: '350 - 600 kr/m²', imageUrl: productImages.bathroomTiles },
    { name: 'Gulvflis Antrasitt 30x30 cm', category: 'Baderomsrenovering', type: 'flis', priceRange: '280 - 500 kr/m²', imageUrl: productImages.bathroomTiles },
    { name: 'Klinker Svart Matt 10x10 cm', category: 'Baderomsrenovering', type: 'flis', priceRange: '250 - 450 kr/m²', imageUrl: productImages.bathroomTiles },

    // BADEROMSSKAP
    { name: 'Hafa East baderomskap 60 cm hvit', category: 'Baderomsrenovering', brand: 'Hafa', type: 'skap', priceRange: '5 000 - 8 000 kr', imageUrl: productImages.bathroomSink },
    { name: 'Hafa East baderomskap 80 cm hvit', category: 'Baderomsrenovering', brand: 'Hafa', type: 'skap', priceRange: '6 000 - 9 500 kr', imageUrl: productImages.bathroomSink },
    { name: 'Hafa Original baderomskap 60 cm grå', category: 'Baderomsrenovering', brand: 'Hafa', type: 'skap', priceRange: '5 500 - 8 500 kr', imageUrl: productImages.bathroomSink },
    { name: 'IDO Glow baderomsskap 61 cm hvit', category: 'Baderomsrenovering', brand: 'IDO', type: 'skap', priceRange: '4 500 - 7 000 kr', imageUrl: productImages.bathroomSink },
    { name: 'Gustavsberg Nautic baderomsskap 60 cm', category: 'Baderomsrenovering', brand: 'Gustavsberg', type: 'skap', priceRange: '5 000 - 7 500 kr', imageUrl: productImages.bathroomSink },

    // SPEIL
    { name: 'Hafa Speil med LED-belysning 60 cm', category: 'Baderomsrenovering', brand: 'Hafa', type: 'speil', priceRange: '3 000 - 5 000 kr', imageUrl: productImages.bathroomFaucet },
    { name: 'Hafa Speil med LED-belysning 80 cm', category: 'Baderomsrenovering', brand: 'Hafa', type: 'speil', priceRange: '3 500 - 5 500 kr', imageUrl: productImages.bathroomFaucet },
    { name: 'IDO Speilskap 60 cm', category: 'Baderomsrenovering', brand: 'IDO', type: 'speil', priceRange: '2 500 - 4 500 kr', imageUrl: productImages.bathroomFaucet },
    { name: 'Gustavsberg Speilskap 80 cm', category: 'Baderomsrenovering', brand: 'Gustavsberg', type: 'speil', priceRange: '3 000 - 5 000 kr', imageUrl: productImages.bathroomFaucet },
  ],

  // ==========================================
  // GARASJEPORT (40+ produkter)
  // ==========================================
  'garasjeport': [
    // CRAWFORD
    { name: 'Crawford Seksjonport ISO 45 Single 230x210 cm', category: 'garasjeport', brand: 'Crawford', type: 'seksjonport', priceRange: '20 000 - 30 000 kr', imageUrl: productImages.garageDoor, popular: true },
    { name: 'Crawford Seksjonport ISO 45 Single 240x210 cm', category: 'garasjeport', brand: 'Crawford', type: 'seksjonport', priceRange: '21 000 - 32 000 kr', imageUrl: productImages.garageDoor },
    { name: 'Crawford Seksjonport ISO 45 Double 460x210 cm', category: 'garasjeport', brand: 'Crawford', type: 'seksjonport', priceRange: '35 000 - 50 000 kr', imageUrl: productImages.garageDoor },
    { name: 'Crawford Seksjonport ISO 60 Single 240x210 cm', category: 'garasjeport', brand: 'Crawford', type: 'seksjonport', priceRange: '25 000 - 38 000 kr', imageUrl: productImages.garageSectional },
    { name: 'Crawford Dorlink garasjeportåpner', category: 'garasjeport', brand: 'Crawford', type: 'portåpner', priceRange: '3 000 - 5 000 kr', imageUrl: productImages.garageOpener, popular: true },
    { name: 'Crawford Dorlink S garasjeportåpner WiFi', category: 'garasjeport', brand: 'Crawford', type: 'portåpner', priceRange: '4 500 - 6 500 kr', imageUrl: productImages.garageOpener },

    // HORMANN
    { name: 'Hormann LPU42 seksjonport 230x200 cm', category: 'garasjeport', brand: 'Hormann', type: 'seksjonport', priceRange: '25 000 - 35 000 kr', imageUrl: productImages.garageDoor, popular: true },
    { name: 'Hormann LPU42 seksjonport 240x212 cm', category: 'garasjeport', brand: 'Hormann', type: 'seksjonport', priceRange: '26 000 - 38 000 kr', imageUrl: productImages.garageDoor },
    { name: 'Hormann LPU42 seksjonport Double 480x212 cm', category: 'garasjeport', brand: 'Hormann', type: 'seksjonport', priceRange: '45 000 - 65 000 kr', imageUrl: productImages.garageDoor },
    { name: 'Hormann LPU67 seksjonport 240x212 cm', category: 'garasjeport', brand: 'Hormann', type: 'seksjonport', priceRange: '30 000 - 45 000 kr', imageUrl: productImages.garageSectional },
    { name: 'Hormann Supramatic portåpner E4', category: 'garasjeport', brand: 'Hormann', type: 'portåpner', priceRange: '4 000 - 6 000 kr', imageUrl: productImages.garageOpener },
    { name: 'Hormann Supramatic portåpner P4 BiSecur', category: 'garasjeport', brand: 'Hormann', type: 'portåpner', priceRange: '5 500 - 7 500 kr', imageUrl: productImages.garageOpener },

    // NOVOFERM
    { name: 'Novoferm ISO 45 seksjonport 230x200 cm', category: 'garasjeport', brand: 'Novoferm', type: 'seksjonport', priceRange: '22 000 - 32 000 kr', imageUrl: productImages.garageDoor },
    { name: 'Novoferm ISO 45 seksjonport 240x212 cm', category: 'garasjeport', brand: 'Novoferm', type: 'seksjonport', priceRange: '24 000 - 35 000 kr', imageUrl: productImages.garageDoor },
    { name: 'Novoferm ISO 60 seksjonport 240x212 cm', category: 'garasjeport', brand: 'Novoferm', type: 'seksjonport', priceRange: '28 000 - 42 000 kr', imageUrl: productImages.garageSectional },
    { name: 'Novoferm Novomatic portåpner 563', category: 'garasjeport', brand: 'Novoferm', type: 'portåpner', priceRange: '3 500 - 5 500 kr', imageUrl: productImages.garageOpener },

    // CHAMBERLAIN
    { name: 'Chamberlain ML700EV portåpner', category: 'garasjeport', brand: 'Chamberlain', type: 'portåpner', priceRange: '3 000 - 4 500 kr', imageUrl: productImages.garageOpener },
    { name: 'Chamberlain ML1000EV portåpner', category: 'garasjeport', brand: 'Chamberlain', type: 'portåpner', priceRange: '3 500 - 5 000 kr', imageUrl: productImages.garageOpener },
    { name: 'Chamberlain MyQ WiFi portåpner', category: 'garasjeport', brand: 'Chamberlain', type: 'portåpner', priceRange: '4 500 - 6 500 kr', imageUrl: productImages.garageOpener, popular: true },

    // LIFTMASTER
    { name: 'LiftMaster 8165W WiFi portåpner', category: 'garasjeport', brand: 'LiftMaster', type: 'portåpner', priceRange: '4 000 - 6 000 kr', imageUrl: productImages.garageOpener },
    { name: 'LiftMaster 8360 Premium portåpner', category: 'garasjeport', brand: 'LiftMaster', type: 'portåpner', priceRange: '5 000 - 7 500 kr', imageUrl: productImages.garageOpener },

    // RYTERNA
    { name: 'Ryterna Iso 45 seksjonport 230x200 cm', category: 'garasjeport', brand: 'Ryterna', type: 'seksjonport', priceRange: '18 000 - 28 000 kr', imageUrl: productImages.garageDoor },
    { name: 'Ryterna Iso 45 seksjonport 240x212 cm', category: 'garasjeport', brand: 'Ryterna', type: 'seksjonport', priceRange: '20 000 - 30 000 kr', imageUrl: productImages.garageDoor },
    { name: 'Ryterna Iso 60 seksjonport 240x212 cm', category: 'garasjeport', brand: 'Ryterna', type: 'seksjonport', priceRange: '24 000 - 36 000 kr', imageUrl: productImages.garageSectional },

    // NORMSTAHL
    { name: 'Normstahl seksjonport Excellence 240x212 cm', category: 'garasjeport', brand: 'Normstahl', type: 'seksjonport', priceRange: '26 000 - 38 000 kr', imageUrl: productImages.garageDoor },
    { name: 'Normstahl seksjonport Magic 240x212 cm', category: 'garasjeport', brand: 'Normstahl', type: 'seksjonport', priceRange: '22 000 - 34 000 kr', imageUrl: productImages.garageDoor },

    // TILBEHØR
    { name: 'Fjernkontroll garasjeport 2-kanals', category: 'garasjeport', type: 'tilbehør', priceRange: '200 - 400 kr', imageUrl: productImages.garageOpener },
    { name: 'Fjernkontroll garasjeport 4-kanals', category: 'garasjeport', type: 'tilbehør', priceRange: '300 - 600 kr', imageUrl: productImages.garageOpener },
    { name: 'Tastatur garasjeport trådløs', category: 'garasjeport', type: 'tilbehør', priceRange: '800 - 1 500 kr', imageUrl: productImages.garageOpener },
    { name: 'Fotocelle sikkerhet garasjeport', category: 'garasjeport', type: 'tilbehør', priceRange: '500 - 1 000 kr', imageUrl: productImages.garageOpener },
    { name: 'WiFi modul for garasjeportåpner', category: 'garasjeport', type: 'tilbehør', priceRange: '800 - 1 500 kr', imageUrl: productImages.garageOpener },
  ],

  // ==========================================
  // RØR (50+ produkter)
  // ==========================================
  'ror': [
    // KJØKKENBATTERIER
    { name: 'Oras Safira kjøkkenarmatur', category: 'ror', brand: 'Oras', type: 'kjøkkenarmatur', priceRange: '2 500 - 4 000 kr', imageUrl: productImages.kitchenFaucet, popular: true },
    { name: 'Oras Inspera kjøkkenarmatur', category: 'ror', brand: 'Oras', type: 'kjøkkenarmatur', priceRange: '3 000 - 4 500 kr', imageUrl: productImages.kitchenFaucet },
    { name: 'Grohe Blue kjøkkenbatteri m/kullsyrefilter', category: 'ror', brand: 'Grohe', type: 'kjøkkenarmatur', priceRange: '12 000 - 18 000 kr', imageUrl: productImages.kitchenFaucet, popular: true },
    { name: 'Grohe Eurosmart kjøkkenbatteri', category: 'ror', brand: 'Grohe', type: 'kjøkkenarmatur', priceRange: '2 200 - 3 800 kr', imageUrl: productImages.kitchenFaucet },
    { name: 'Grohe Euroeco kjøkkenbatteri', category: 'ror', brand: 'Grohe', type: 'kjøkkenarmatur', priceRange: '1 800 - 3 000 kr', imageUrl: productImages.kitchenFaucet },
    { name: 'Mora Armatur Inxx kjøkkenbatteri', category: 'ror', brand: 'Mora', type: 'kjøkkenarmatur', priceRange: '3 000 - 5 000 kr', imageUrl: productImages.kitchenFaucet },
    { name: 'Mora MMIX kjøkkenbatteri', category: 'ror', brand: 'Mora', type: 'kjøkkenarmatur', priceRange: '2 500 - 4 200 kr', imageUrl: productImages.kitchenFaucet },
    { name: 'Hansgrohe Focus kjøkkenbatteri', category: 'ror', brand: 'Hansgrohe', type: 'kjøkkenarmatur', priceRange: '2 800 - 4 500 kr', imageUrl: productImages.kitchenFaucet },
    { name: 'Blanco Linus S kjøkkenbatteri', category: 'ror', brand: 'Blanco', type: 'kjøkkenarmatur', priceRange: '3 500 - 5 500 kr', imageUrl: productImages.kitchenFaucet },

    // VARMTVANNSBEREDERE
    { name: 'OSO Super S varmtvannsbereder 200L', category: 'ror', brand: 'OSO', type: 'varmtvannsbereder', priceRange: '8 000 - 12 000 kr', imageUrl: productImages.waterHeater, popular: true },
    { name: 'OSO Super S varmtvannsbereder 300L', category: 'ror', brand: 'OSO', type: 'varmtvannsbereder', priceRange: '10 000 - 15 000 kr', imageUrl: productImages.waterHeater },
    { name: 'OSO Saga S varmtvannsbereder 200L', category: 'ror', brand: 'OSO', type: 'varmtvannsbereder', priceRange: '9 000 - 13 000 kr', imageUrl: productImages.waterHeater },
    { name: 'Nibe Fighter varmtvannsbereder 300L', category: 'ror', brand: 'Nibe', type: 'varmtvannsbereder', priceRange: '11 000 - 16 000 kr', imageUrl: productImages.waterHeater },
    { name: 'ACV Smart EW 210L', category: 'ror', brand: 'ACV', type: 'varmtvannsbereder', priceRange: '12 000 - 18 000 kr', imageUrl: productImages.waterHeater },
    { name: 'Ariston Lydos Hybrid 80L', category: 'ror', brand: 'Ariston', type: 'varmtvannsbereder', priceRange: '9 000 - 14 000 kr', imageUrl: productImages.waterHeater },

    // AVFALLSKVERNERE
    { name: 'InSinkErator Evolution 200 avfallskvern', category: 'ror', brand: 'InSinkErator', type: 'avfallskvern', priceRange: '4 500 - 6 500 kr', imageUrl: productImages.plumbingPipes, popular: true },
    { name: 'InSinkErator Model 66 avfallskvern', category: 'ror', brand: 'InSinkErator', type: 'avfallskvern', priceRange: '3 000 - 4 500 kr', imageUrl: productImages.plumbingPipes },
    { name: 'Waste King L-8000 avfallskvern', category: 'ror', brand: 'Waste King', type: 'avfallskvern', priceRange: '3 500 - 5 000 kr', imageUrl: productImages.plumbingPipes },

    // RØR OG KOBLINGER
    { name: 'Pettinaroli kobling 15mm messing', category: 'ror', brand: 'Pettinaroli', type: 'kobling', priceRange: '50 - 150 kr', imageUrl: productImages.plumbingPipes },
    { name: 'Pettinaroli kobling 22mm messing', category: 'ror', brand: 'Pettinaroli', type: 'kobling', priceRange: '80 - 200 kr', imageUrl: productImages.plumbingPipes },
    { name: 'Uponor PEX rør 16mm 50m', category: 'ror', brand: 'Uponor', type: 'rør', priceRange: '1 500 - 2 500 kr', imageUrl: productImages.plumbingPipes },
    { name: 'Uponor PEX rør 20mm 50m', category: 'ror', brand: 'Uponor', type: 'rør', priceRange: '2 000 - 3 500 kr', imageUrl: productImages.plumbingPipes },
    { name: 'Wavin HTA rør 16mm 100m', category: 'ror', brand: 'Wavin', type: 'rør', priceRange: '2 500 - 4 000 kr', imageUrl: productImages.plumbingPipes },
    { name: 'Pipelife PP rør 110mm 3m', category: 'ror', brand: 'Pipelife', type: 'rør', priceRange: '200 - 400 kr', imageUrl: productImages.plumbingPipes },

    // SIFONER OG SLUK
    { name: 'Pipelife flaskesifon hvit', category: 'ror', brand: 'Pipelife', type: 'sifon', priceRange: '150 - 300 kr', imageUrl: productImages.plumbingPipes },
    { name: 'Pipelife flaskesifon krom', category: 'ror', brand: 'Pipelife', type: 'sifon', priceRange: '250 - 450 kr', imageUrl: productImages.plumbingPipes },
    { name: 'Unidrain sluk 150x150mm', category: 'ror', brand: 'Unidrain', type: 'sluk', priceRange: '800 - 1 500 kr', imageUrl: productImages.plumbingPipes },
    { name: 'Purus Line sluk 600mm', category: 'ror', brand: 'Purus', type: 'sluk', priceRange: '1 500 - 2 500 kr', imageUrl: productImages.plumbingPipes },

    // VENTILER OG KRANER
    { name: 'Kugglekran 15mm messing', category: 'ror', type: 'ventil', priceRange: '80 - 200 kr', imageUrl: productImages.plumbingPipes },
    { name: 'Kugglekran 22mm messing', category: 'ror', type: 'ventil', priceRange: '120 - 280 kr', imageUrl: productImages.plumbingPipes },
    { name: 'Avtappingskran utvendis frostsikker', category: 'ror', type: 'ventil', priceRange: '300 - 600 kr', imageUrl: productImages.plumbingPipes },
    { name: 'Reduksjonsventil trykkreduksjon', category: 'ror', type: 'ventil', priceRange: '800 - 1 500 kr', imageUrl: productImages.plumbingPipes },
  ],

  // ==========================================
  // ELEKTRISK (60+ produkter)
  // ==========================================
  'elektrisk': [
    // STIKKONTAKTER
    { name: 'Elko Plus stikkontakt jordet hvit', category: 'elektrisk', brand: 'Elko', type: 'stikkontakt', priceRange: '80 - 150 kr', imageUrl: productImages.electricalOutlet, popular: true },
    { name: 'Elko Plus stikkontakt jordet sort', category: 'elektrisk', brand: 'Elko', type: 'stikkontakt', priceRange: '90 - 160 kr', imageUrl: productImages.electricalOutlet },
    { name: 'Elko Plus stikkontakt USB hvit', category: 'elektrisk', brand: 'Elko', type: 'stikkontakt', priceRange: '250 - 450 kr', imageUrl: productImages.electricalOutlet },
    { name: 'Gira E2 stikkontakt jordet hvit', category: 'elektrisk', brand: 'Gira', type: 'stikkontakt', priceRange: '150 - 300 kr', imageUrl: productImages.electricalOutlet, popular: true },
    { name: 'Gira E2 stikkontakt jordet antrasitt', category: 'elektrisk', brand: 'Gira', type: 'stikkontakt', priceRange: '170 - 320 kr', imageUrl: productImages.electricalOutlet },
    { name: 'Schneider Exxact stikkontakt jordet hvit', category: 'elektrisk', brand: 'Schneider', type: 'stikkontakt', priceRange: '120 - 250 kr', imageUrl: productImages.electricalOutlet },
    { name: 'ABB Busch-Jaeger stikkontakt USB-C hvit', category: 'elektrisk', brand: 'ABB', type: 'stikkontakt', priceRange: '300 - 500 kr', imageUrl: productImages.electricalOutlet },
    { name: 'Jung AS500 stikkontakt jordet hvit', category: 'elektrisk', brand: 'Jung', type: 'stikkontakt', priceRange: '180 - 320 kr', imageUrl: productImages.electricalOutlet },

    // BRYTERE
    { name: 'Elko Plus bryter vippebryter hvit', category: 'elektrisk', brand: 'Elko', type: 'bryter', priceRange: '60 - 120 kr', imageUrl: productImages.lightSwitch, popular: true },
    { name: 'Elko Plus bryter vippebryter sort', category: 'elektrisk', brand: 'Elko', type: 'bryter', priceRange: '70 - 130 kr', imageUrl: productImages.lightSwitch },
    { name: 'Elko Plus bryter seribryter hvit', category: 'elektrisk', brand: 'Elko', type: 'bryter', priceRange: '90 - 160 kr', imageUrl: productImages.lightSwitch },
    { name: 'Gira E2 bryter vippebryter hvit', category: 'elektrisk', brand: 'Gira', type: 'bryter', priceRange: '120 - 250 kr', imageUrl: productImages.lightSwitch },
    { name: 'Gira E2 bryter seribryter antrasitt', category: 'elektrisk', brand: 'Gira', type: 'bryter', priceRange: '150 - 280 kr', imageUrl: productImages.lightSwitch },
    { name: 'Schneider Exxact bryter hvit', category: 'elektrisk', brand: 'Schneider', type: 'bryter', priceRange: '80 - 180 kr', imageUrl: productImages.lightSwitch },
    { name: 'Jung AS500 bryter antrasitt', category: 'elektrisk', brand: 'Jung', type: 'bryter', priceRange: '140 - 280 kr', imageUrl: productImages.lightSwitch },

    // DIMMERE
    { name: 'Schneider Exxact dimmer LED 400W hvit', category: 'elektrisk', brand: 'Schneider', type: 'dimmer', priceRange: '400 - 800 kr', imageUrl: productImages.dimmer, popular: true },
    { name: 'Schneider Exxact dimmer LED 400W sort', category: 'elektrisk', brand: 'Schneider', type: 'dimmer', priceRange: '420 - 850 kr', imageUrl: productImages.dimmer },
    { name: 'Elko Plus dimmer LED 400W hvit', category: 'elektrisk', brand: 'Elko', type: 'dimmer', priceRange: '350 - 700 kr', imageUrl: productImages.dimmer },
    { name: 'Gira E2 dimmer universal LED 420W', category: 'elektrisk', brand: 'Gira', type: 'dimmer', priceRange: '600 - 1 200 kr', imageUrl: productImages.dimmer },
    { name: 'Jung AS500 dimmer LED 400W', category: 'elektrisk', brand: 'Jung', type: 'dimmer', priceRange: '550 - 1 000 kr', imageUrl: productImages.dimmer },

    // LED-LYSSTOFFER OG STRIPS
    { name: 'Philips Hue LED-stripe 5m RGB+White', category: 'elektrisk', brand: 'Philips', type: 'led-strip', priceRange: '800 - 1 200 kr', imageUrl: productImages.ledStrip, popular: true },
    { name: 'Philips Hue LED-stripe 2m RGB+White', category: 'elektrisk', brand: 'Philips', type: 'led-strip', priceRange: '500 - 800 kr', imageUrl: productImages.ledStrip },
    { name: 'IKEA Trådfri LED-stripe 5m varmhvit', category: 'elektrisk', brand: 'IKEA', type: 'led-strip', priceRange: '400 - 700 kr', imageUrl: productImages.ledStrip },
    { name: 'Osram LED-stripe 5m RGB', category: 'elektrisk', brand: 'Osram', type: 'led-strip', priceRange: '350 - 650 kr', imageUrl: productImages.ledStrip },

    // LED-PÆRER
    { name: 'Philips LED-pære E27 13W varmhvit', category: 'elektrisk', brand: 'Philips', type: 'led-pære', priceRange: '80 - 150 kr', imageUrl: productImages.ledStrip },
    { name: 'Philips LED-pære E14 6W varmhvit', category: 'elektrisk', brand: 'Philips', type: 'led-pære', priceRange: '60 - 120 kr', imageUrl: productImages.ledStrip },
    { name: 'Osram LED-pære GU10 5W varmhvit', category: 'elektrisk', brand: 'Osram', type: 'led-pære', priceRange: '50 - 100 kr', imageUrl: productImages.ledStrip },
    { name: 'IKEA Trådfri LED-pære E27 13W', category: 'elektrisk', brand: 'IKEA', type: 'led-pære', priceRange: '70 - 130 kr', imageUrl: productImages.ledStrip },

    // DOWNLIGHTS
    { name: 'Malmbergs Downlight LED 6W hvit', category: 'elektrisk', brand: 'Malmbergs', type: 'downlight', priceRange: '150 - 300 kr', imageUrl: productImages.ledStrip },
    { name: 'Malmbergs Downlight LED 10W hvit', category: 'elektrisk', brand: 'Malmbergs', type: 'downlight', priceRange: '200 - 400 kr', imageUrl: productImages.ledStrip },
    { name: 'Philips Downlight LED Hue 6W', category: 'elektrisk', brand: 'Philips', type: 'downlight', priceRange: '400 - 700 kr', imageUrl: productImages.ledStrip },

    // SIKRINGSSKAP OG AUTOMATSIKRINGER
    { name: 'Schneider Easy9 automatsikring B16A', category: 'elektrisk', brand: 'Schneider', type: 'automatsikring', priceRange: '80 - 150 kr', imageUrl: productImages.electricalOutlet },
    { name: 'Schneider Easy9 automatsikring C16A', category: 'elektrisk', brand: 'Schneider', type: 'automatsikring', priceRange: '80 - 150 kr', imageUrl: productImages.electricalOutlet },
    { name: 'ABB S200 automatsikring B16A', category: 'elektrisk', brand: 'ABB', type: 'automatsikring', priceRange: '100 - 180 kr', imageUrl: productImages.electricalOutlet },
    { name: 'Eaton PLS6 automatsikring B16A', category: 'elektrisk', brand: 'Eaton', type: 'automatsikring', priceRange: '90 - 170 kr', imageUrl: productImages.electricalOutlet },
  ],

  // ==========================================
  // MALING (40+ produkter)
  // ==========================================
  'maling': [
    // INNENDØRS MALING
    { name: 'Jotun Lady Pure Color hvit matt 3L', category: 'maling', brand: 'Jotun', type: 'innendørs', priceRange: '600 - 900 kr', imageUrl: productImages.paintBucket, popular: true },
    { name: 'Jotun Lady Pure Color hvit matt 10L', category: 'maling', brand: 'Jotun', type: 'innendørs', priceRange: '1 800 - 2 500 kr', imageUrl: productImages.paintBucket },
    { name: 'Jotun Lady Supreme Finish matt 3L', category: 'maling', brand: 'Jotun', type: 'innendørs', priceRange: '700 - 1 000 kr', imageUrl: productImages.paintBucket },
    { name: 'Beckers Parfect matt hvit 3L', category: 'maling', brand: 'Beckers', type: 'innendørs', priceRange: '500 - 800 kr', imageUrl: productImages.paintBucket, popular: true },
    { name: 'Beckers Parfect matt hvit 10L', category: 'maling', brand: 'Beckers', type: 'innendørs', priceRange: '1 500 - 2 200 kr', imageUrl: productImages.paintBucket },
    { name: 'Flügger Flutex 5S hvit matt 3L', category: 'maling', brand: 'Flügger', type: 'innendørs', priceRange: '550 - 850 kr', imageUrl: productImages.paintBucket },
    { name: 'Flügger Flutex 5S hvit matt 10L', category: 'maling', brand: 'Flügger', type: 'innendørs', priceRange: '1 600 - 2 400 kr', imageUrl: productImages.paintBucket },
    { name: 'Nordsjö Idé & Design matt hvit 3L', category: 'maling', brand: 'Nordsjö', type: 'innendørs', priceRange: '550 - 900 kr', imageUrl: productImages.paintBucket },
    { name: 'Gjøco Optimal Matt hvit 3L', category: 'maling', brand: 'Gjøco', type: 'innendørs', priceRange: '500 - 800 kr', imageUrl: productImages.paintBucket },

    // UTENDØRS MALING
    { name: 'Jotun Trebitt oljebeis 3L teak', category: 'maling', brand: 'Jotun', type: 'utendørs', priceRange: '400 - 700 kr', imageUrl: productImages.woodStain, popular: true },
    { name: 'Jotun Trebitt oljebeis 3L nøtt', category: 'maling', brand: 'Jotun', type: 'utendørs', priceRange: '400 - 700 kr', imageUrl: productImages.woodStain },
    { name: 'Jotun Demidekk Ultimate 3L hvit', category: 'maling', brand: 'Jotun', type: 'utendørs', priceRange: '600 - 1 000 kr', imageUrl: productImages.paintBucket },
    { name: 'Beckers Utomhusfärg matt hvit 3L', category: 'maling', brand: 'Beckers', type: 'utendørs', priceRange: '450 - 750 kr', imageUrl: productImages.paintBucket },
    { name: 'Gjøco Supermaling hvit glans 3L', category: 'maling', brand: 'Gjøco', type: 'utendørs', priceRange: '450 - 750 kr', imageUrl: productImages.paintBucket },
    { name: 'Nordsjø Optimal Täckfärg 10L hvit', category: 'maling', brand: 'Nordsjö', type: 'utendørs', priceRange: '1 400 - 2 000 kr', imageUrl: productImages.paintBucket },

    // MALING TILBEHØR
    { name: 'Anza Elite Pro malerull 25cm', category: 'maling', brand: 'Anza', type: 'tilbehør', priceRange: '80 - 150 kr', imageUrl: productImages.paintRoller },
    { name: 'Anza Elite pensel 50mm', category: 'maling', brand: 'Anza', type: 'tilbehør', priceRange: '120 - 250 kr', imageUrl: productImages.paintRoller },
    { name: 'Harris Platinum malerull 23cm', category: 'maling', brand: 'Harris', type: 'tilbehør', priceRange: '100 - 200 kr', imageUrl: productImages.paintRoller },
    { name: 'Anza teleskopskaft 1-2m', category: 'maling', brand: 'Anza', type: 'tilbehør', priceRange: '200 - 400 kr', imageUrl: productImages.paintRoller },
  ],

  // ==========================================
  // TREVARE (50+ produkter)
  // ==========================================
  'trevare': [
    // TERRASSEBORD
    { name: 'Kebony terrassebord 28x145mm 4,8m', category: 'trevare', brand: 'Kebony', type: 'terrassebord', priceRange: '350 - 500 kr/m', imageUrl: productImages.woodDeck, popular: true },
    { name: 'Kebony terrassebord 28x120mm 4,8m', category: 'trevare', brand: 'Kebony', type: 'terrassebord', priceRange: '300 - 450 kr/m', imageUrl: productImages.woodDeck },
    { name: 'Accoya terrassebord 28x145mm 4,8m', category: 'trevare', brand: 'Accoya', type: 'terrassebord', priceRange: '320 - 480 kr/m', imageUrl: productImages.woodDeck },
    { name: 'Trykkimpregnert terrassebord 28x145mm 4,8m', category: 'trevare', type: 'terrassebord', priceRange: '80 - 150 kr/m', imageUrl: productImages.woodDeck },

    // PANEL
    { name: 'Huntonit Panel 12mm 2700x620mm', category: 'trevare', brand: 'Huntonit', type: 'panel', priceRange: '200 - 350 kr/m²', imageUrl: productImages.woodPlanks },
    { name: 'Huntonit Panel 15mm 2700x620mm', category: 'trevare', brand: 'Huntonit', type: 'panel', priceRange: '250 - 400 kr/m²', imageUrl: productImages.woodPlanks },
    { name: 'Moelven Basis Panel 14x120mm', category: 'trevare', brand: 'Moelven', type: 'panel', priceRange: '150 - 280 kr/m²', imageUrl: productImages.woodPlanks },

    // LIMTRE OG KONSTRUKSJONVIRKE
    { name: 'Moelven limtre 90x90mm 4,5m', category: 'trevare', brand: 'Moelven', type: 'limtre', priceRange: '150 - 250 kr/m', imageUrl: productImages.woodPlanks },
    { name: 'Moelven limtre 115x115mm 4,5m', category: 'trevare', brand: 'Moelven', type: 'limtre', priceRange: '200 - 350 kr/m', imageUrl: productImages.woodPlanks },
    { name: 'Konstruksjonsvirke 48x98mm 4,2m C24', category: 'trevare', type: 'konstruksjonsvirke', priceRange: '80 - 150 kr/stk', imageUrl: productImages.woodPlanks },
    { name: 'Konstruksjonsvirke 48x148mm 4,2m C24', category: 'trevare', type: 'konstruksjonsvirke', priceRange: '120 - 220 kr/stk', imageUrl: productImages.woodPlanks },

    // PARKETT
    { name: 'Kährs Parkett Ask 3-stav 15mm', category: 'trevare', brand: 'Kährs', type: 'parkett', priceRange: '400 - 700 kr/m²', imageUrl: productImages.hardwoodFloor, popular: true },
    { name: 'Kährs Parkett Eik 3-stav 15mm', category: 'trevare', brand: 'Kährs', type: 'parkett', priceRange: '450 - 750 kr/m²', imageUrl: productImages.hardwoodFloor },
    { name: 'Tarkett Parkett Eik Nature 14mm', category: 'trevare', brand: 'Tarkett', type: 'parkett', priceRange: '350 - 650 kr/m²', imageUrl: productImages.hardwoodFloor },
    { name: 'Boen Parkett Eik Andante 14mm', category: 'trevare', brand: 'Boen', type: 'parkett', priceRange: '500 - 900 kr/m²', imageUrl: productImages.hardwoodFloor },

    // LAMINAT
    { name: 'Pergo Laminat Classic Plank Eik 8mm', category: 'trevare', brand: 'Pergo', type: 'laminat', priceRange: '200 - 400 kr/m²', imageUrl: productImages.laminateFloor, popular: true },
    { name: 'Pergo Laminat Original Excellence Eik 8mm', category: 'trevare', brand: 'Pergo', type: 'laminat', priceRange: '250 - 450 kr/m²', imageUrl: productImages.laminateFloor },
    { name: 'Tarkett Laminat Heritage Eik 8mm', category: 'trevare', brand: 'Tarkett', type: 'laminat', priceRange: '180 - 350 kr/m²', imageUrl: productImages.laminateFloor },
    { name: 'Quick-Step Laminat Impressive Eik 8mm', category: 'trevare', brand: 'Quick-Step', type: 'laminat', priceRange: '220 - 420 kr/m²', imageUrl: productImages.laminateFloor },

    // SKRUER OG BESLAG
    { name: 'Treteknisk terrasseskruer 5x70mm 200 stk', category: 'trevare', brand: 'Treteknisk', type: 'skruer', priceRange: '200 - 400 kr', imageUrl: productImages.woodDeck },
    { name: 'Treteknisk terrasseskruer 5x90mm 200 stk', category: 'trevare', brand: 'Treteknisk', type: 'skruer', priceRange: '250 - 450 kr', imageUrl: productImages.woodDeck },
    { name: 'Simpson beslag vinkelbeslag 90x90mm', category: 'trevare', brand: 'Simpson', type: 'beslag', priceRange: '50 - 120 kr/stk', imageUrl: productImages.woodPlanks },
  ],

  // ==========================================
  // ENTREPRENØR (40+ produkter)
  // ==========================================
  'entreprenor': [
    // PUKK OG GRUS
    { name: 'Pukk 0-32mm løsmasse', category: 'entreprenor', type: 'pukk', priceRange: '200 - 350 kr/tonn', imageUrl: productImages.gravel, popular: true },
    { name: 'Pukk 8-16mm løsmasse', category: 'entreprenor', type: 'pukk', priceRange: '250 - 400 kr/tonn', imageUrl: productImages.gravel },
    { name: 'Pukk 16-32mm løsmasse', category: 'entreprenor', type: 'pukk', priceRange: '220 - 380 kr/tonn', imageUrl: productImages.gravel },
    { name: 'Singel 8-11mm dekorativ', category: 'entreprenor', type: 'pukk', priceRange: '300 - 500 kr/tonn', imageUrl: productImages.gravel },
    { name: 'Singel 16-22mm dekorativ', category: 'entreprenor', type: 'pukk', priceRange: '280 - 480 kr/tonn', imageUrl: productImages.gravel },

    // SAND
    { name: 'Sand 0-8mm løsmasse', category: 'entreprenor', type: 'sand', priceRange: '250 - 400 kr/tonn', imageUrl: productImages.sand, popular: true },
    { name: 'Sand 0-4mm finkornet', category: 'entreprenor', type: 'sand', priceRange: '280 - 450 kr/tonn', imageUrl: productImages.sand },
    { name: 'Lekesand 0-2mm', category: 'entreprenor', type: 'sand', priceRange: '350 - 550 kr/tonn', imageUrl: productImages.sand },
    { name: 'Mursand 0-4mm', category: 'entreprenor', type: 'sand', priceRange: '300 - 500 kr/tonn', imageUrl: productImages.sand },

    // TOPPMASSE OG JORD
    { name: 'Toppmasse/Matjord dyrkajord', category: 'entreprenor', type: 'jord', priceRange: '300 - 500 kr/m³', imageUrl: productImages.sand, popular: true },
    { name: 'Kompostjord organisk', category: 'entreprenor', type: 'jord', priceRange: '350 - 550 kr/m³', imageUrl: productImages.sand },
    { name: 'Plengjord næring', category: 'entreprenor', type: 'jord', priceRange: '400 - 600 kr/m³', imageUrl: productImages.sand },

    // ASFALT
    { name: 'Asfalt 0-11mm kildesortering', category: 'entreprenor', type: 'asfalt', priceRange: '400 - 650 kr/tonn', imageUrl: productImages.asphalt, popular: true },
    { name: 'Asfalt 0-16mm grov', category: 'entreprenor', type: 'asfalt', priceRange: '420 - 680 kr/tonn', imageUrl: productImages.asphalt },
    { name: 'Kaldeasfalt 25kg sekk', category: 'entreprenor', type: 'asfalt', priceRange: '200 - 350 kr', imageUrl: productImages.asphalt },

    // DRENERINGSRØR OG KUMMER
    { name: 'Dreneringsrør 110mm perforert 6m', category: 'entreprenor', type: 'drenering', priceRange: '50 - 100 kr/m', imageUrl: productImages.drainagePipe, popular: true },
    { name: 'Dreneringsrør 160mm perforert 6m', category: 'entreprenor', type: 'drenering', priceRange: '80 - 150 kr/m', imageUrl: productImages.drainagePipe },
    { name: 'Inspeksjonskum 400mm', category: 'entreprenor', type: 'kum', priceRange: '800 - 1 500 kr/stk', imageUrl: productImages.drainagePipe },
    { name: 'Sluk kum 315mm', category: 'entreprenor', type: 'kum', priceRange: '600 - 1 200 kr/stk', imageUrl: productImages.drainagePipe },

    // KANTSTEIN OG BROSTEIN
    { name: 'Kantstein betong 100x250mm grå', category: 'entreprenor', type: 'kantstein', priceRange: '80 - 150 kr/stk', imageUrl: productImages.gravel },
    { name: 'Kantstein granitt 80x250mm', category: 'entreprenor', type: 'kantstein', priceRange: '150 - 280 kr/stk', imageUrl: productImages.gravel },
    { name: 'Brostein betong 100x100mm grå', category: 'entreprenor', type: 'brostein', priceRange: '50 - 100 kr/stk', imageUrl: productImages.gravel },
    { name: 'Brostein betong 200x100mm grå', category: 'entreprenor', type: 'brostein', priceRange: '60 - 120 kr/stk', imageUrl: productImages.gravel },

    // FIBERDUK OG MEMBRAN
    { name: 'Fiberduk 150g/m² 2x100m', category: 'entreprenor', type: 'fiberduk', priceRange: '1 500 - 2 500 kr/rull', imageUrl: productImages.asphalt },
    { name: 'Fiberduk 200g/m² 2x100m', category: 'entreprenor', type: 'fiberduk', priceRange: '2 000 - 3 000 kr/rull', imageUrl: productImages.asphalt },
  ],
};

/**
 * Search for products matching query in a specific category
 */
export function searchProducts(query: string, category: string): Product[] {
  if (!query || query.length < 2) return [];
  
  const categoryProducts = productDatabase[category] || [];
  const lowerQuery = query.toLowerCase();
  
  return categoryProducts.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    (product.brand && product.brand.toLowerCase().includes(lowerQuery)) ||
    (product.type && product.type.toLowerCase().includes(lowerQuery))
  ).slice(0, 8); // Max 8 suggestions
}

/**
 * Get popular products for a category
 */
export function getPopularProducts(category: string, limit: number = 5): Product[] {
  const categoryProducts = productDatabase[category] || [];
  return categoryProducts.filter(p => p.popular).slice(0, limit);
}

/**
 * Get all unique brands for a category
 */
export function getBrands(category: string): string[] {
  const categoryProducts = productDatabase[category] || [];
  const brands = new Set(categoryProducts.map(p => p.brand).filter(Boolean) as string[]);
  return Array.from(brands).sort();
}

/**
 * Get all unique types for a category
 */
export function getTypes(category: string): string[] {
  const categoryProducts = productDatabase[category] || [];
  const types = new Set(categoryProducts.map(p => p.type).filter(Boolean) as string[]);
  return Array.from(types).sort();
}

/**
 * Filter products by brand, type, and price range
 */
export function filterProducts(
  category: string,
  filters: {
    brand?: string;
    type?: string;
    priceMin?: number;
    priceMax?: number;
  }
): Product[] {
  let products = productDatabase[category] || [];

  if (filters.brand) {
    products = products.filter(p => p.brand === filters.brand);
  }

  if (filters.type) {
    products = products.filter(p => p.type === filters.type);
  }

  if (filters.priceMin !== undefined || filters.priceMax !== undefined) {
    products = products.filter(p => {
      if (!p.priceRange) return true;
      
      // Extract min price from priceRange string (e.g., "25 000 - 35 000 kr")
      const match = p.priceRange.match(/(\d[\d\s]*)/);
      if (!match) return true;
      
      const productPrice = parseInt(match[1].replace(/\s/g, ''));
      
      if (filters.priceMin !== undefined && productPrice < filters.priceMin) return false;
      if (filters.priceMax !== undefined && productPrice > filters.priceMax) return false;
      
      return true;
    });
  }

  return products;
}
