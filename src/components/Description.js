// import React, { Component } from 'react';
// import PropTypes from "prop-types";
// import { ProductConsumer } from "../Context";

// export default class Description extends Component {
//     render() {
//         const { info, id, title, img, price, inCart } = this.props.product;
//         return (
//             <ProductConsumer>
//                 <div className="card-footer mt-1  ">
//                   <p className="align-self-center mb-0">{info}</p>
//                   <h5 className="text-blue mb-0" style ={{fontSize:".9rem"}}>
//                     More Detail +
//                   </h5>
//                   </div>
//             </ProductConsumer>
//         )
//     }
// }
// Products.propTypes = {
//     product: PropTypes.shape({
//       id: PropTypes.number,
//       img: PropTypes.string,
//       title: PropTypes.string,
//       price: PropTypes.number,
//       inCart: PropTypes.bool
//     }).isRequired
//   };