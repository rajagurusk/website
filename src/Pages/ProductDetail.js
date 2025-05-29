// import { useParams, useNavigate } from 'react-router-dom';
// import { useState,useEffect } from 'react';
// import Product1 from '../Images/ecg1.jpeg';
// import Product2 from '../Images/ucg1.png';
// import Product3 from '../Images/multiparamonitor.jpeg';
// import Product4 from '../Images/BPL MULTIPARA MONITOR.png';
// import Product5 from '../Images/pathology.png';
// import Product6 from '../Images/defibrillator.png';
// import Product7 from '../Images/syringe infusion pump.png';
// import Product8 from '../Images/volumeric infusion pump.png';
// import Product9 from '../Images/ward bed.png';
// import Product10 from '../Images/baby warmer.png';
// import Product11 from '../Images/suctionmachine.png';
// import Product12 from '../Images/pulse oximeter.png';
// import Product13 from '../Images/eco-ultrasound.png';
// import Product14 from '../Images/ottable.png';
// import Product15 from '../Images/ctg.jpeg';


// const productData = [
//   {
//     image: Product1,
//     title: "Advanced ECG Monitor",
//     description: "A state-of-the-art ECG device for continuous cardiac monitoring.",
//   },
//   {
//      image: Product2,
//      title: "UCG Monitor",
//      description: "Easy-to-use glucometer with Bluetooth and mobile app sync.",
//   },
//    {
//      image: Product3,
//      title: "Multi Para Monitor",
//      description: "Easy-to-use glucometer with Bluetooth and mobile app sync.",
//   },
//   {
//     image: Product4,
//     title: "BPL Monitor",
//     description: "Accurate, quick-read thermometer with smart connectivity.",
//   },
//    {
//      image: Product5,
//      title: "Pathology",
//      description: "Easy-to-use glucometer with Bluetooth and mobile app sync.",
//   },
//   {
//      image: Product6,
//      title: "Defibrillator",
//      description: "Compact life-saving ventilator for emergency and transport use.",
//    },
//    {
//      image: Product7,
//      title: "Syringe Infusion Pump",
//      description: "Easy-to-use glucometer with Bluetooth and mobile app sync.",
//   },
//   {
//      image: Product8,
//      title: "Volumeric Infusion Pump",
//      description: "Easy-to-use glucometer with Bluetooth and mobile app sync.",
//   },
//   {
//      image: Product9,
//      title: "Ward Bed",
//      description: "Easy-to-use glucometer with Bluetooth and mobile app sync.",
//   },
//    {
//      image: Product10,
//      title: "Baby Warmer",
//      description: "Reliable fluid delivery system with precise dosage control.",
//    },
//    {
//      image: Product11,
//      title: "Suction Machine",
//      description: "Easy-to-use glucometer with Bluetooth and mobile app sync.",
//   },
//     {
//      image: Product12,
//      title: "Pulse Oximeter",
//      description: "Easy-to-use glucometer with Bluetooth and mobile app sync.",
//   },
//    {
//      image: Product13,
//      title: "Eco-Ultrasound",
//      description: "Easy-to-use glucometer with Bluetooth and mobile app sync.",
//   },

 
//   {
//      image: Product14,
//      title: "OT Table",
//      description: "Easy-to-use glucometer with Bluetooth and mobile app sync.",
//   },
//  {
//      image: Product15,
//      title: "Cardiotocography",
//      description: "Easy-to-use glucometer with Bluetooth and mobile app sync.",
//   },
 
 
  
// ];

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [selectedIndex, setSelectedIndex] = useState(parseInt(id));

//   const product = productData[selectedIndex];
// useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     setSelectedIndex(parseInt(id));
//   }, [id]);
//   const handleImageClick = (index) => {
//     setSelectedIndex(index);
//     navigate(`/products/${index}`); 
//       window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly

//   };

//   return (
//     <div style={{ padding: '30px' }}>
//       <h2 style={{ marginBottom: '10px' }}>{product.title}</h2>
//       <div
//     style={{
//       display: 'flex',
//       justifyContent: 'flex-start', // ensures items are left-aligned
//       alignItems: 'flex-start',
//       gap: '40px', // spacing between image and description
//     }}
//   >
//     {/* Product Image */}
//     <img
//       src={product.image}
//       alt={product.title}
//       style={{
//         width: '400px',
//         borderRadius: '10px',
//         boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//         flexShrink: 0, // prevents image from shrinking
//       }}
//     />

//     {/* Description on the right */}
//     <div style={{ flex: 1 }}>
//       <p style={{ fontSize: '16px', marginTop: 0 }}>
//         {product.description}
//       </p>
//     </div>
//   </div>

//       <h2 style={{ marginTop: '40px' }}>Explore Other Products</h2>
// <div
//   style={{
//     maxWidth: '1400px',
//     margin: '40px auto',
//     padding: '20px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
//     borderRadius: '8px',
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gap: '16px'
//   }}
// >
//   {productData.map((p, index) => (
//   <div
//     key={index}
//     onClick={() => handleImageClick(index)}
//     style={{
//       backgroundColor: 'rgb(208,231,240)',
//       padding: '10px',
//       border: selectedIndex === index ? '3px solid #007bff' : '2px solid #ccc',
//       borderRadius: '10px',
//       cursor: 'pointer',
//       textAlign: 'center',
//     }}
//   >
//     <img
//       src={p.image}
//       alt={p.title}
//       style={{
//         width: '100%',
//         height: '200px',
//         objectFit: 'contain',
//         borderRadius: '8px',
//       }}
//     />
//     <p style={{ marginTop: '8px', fontWeight: 'bold', fontSize: '14px' }}>{p.title}</p>
//   </div>
// ))}

// </div>

//     </div>
//   );
// };

// export default ProductDetail;