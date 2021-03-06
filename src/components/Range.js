// import * as React from 'react';
// import { Range } from 'react-range';

// // export interface ITrackBackground {
// //   min: number;
// //   max: number;
// //   values: number[];
// //   colors: string[];
// //   direction?: Direction;
// //   rtl?: boolean;
// // }

// // function getTrackBackground({
// //   values,
// //   colors,
// //   min,
// //   max,
// //   direction = Direction.Right,
// //   rtl = false
// // }: ITrackBackground) {
// //   if (rtl && direction === Direction.Right) {
// //     direction = Direction.Left;
// //   } else if (rtl && Direction.Left) {
// //     direction = Direction.Right;
// //   }
// // }

// const STEP = 1000;
// const MIN = 1000;
// const MAX = 1000000;

// class LabeledTwoThumbs extends React.Component {
//   state = {
//     values: [150000, 850000]
//   };
//   render() {
//     return (
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           flexWrap: 'wrap'
//         }}
//       >
//         <Range
//           values={this.state.values}
//           step={STEP}
//           min={MIN}
//           max={MAX}
//           onChange={values => this.setState({ values })}
//           renderTrack={({ props, children }) => (
//             <div
//               onMouseDown={props.onMouseDown}
//               onTouchStart={props.onTouchStart}
//               style={{
//                 ...props.style,
//                 height: '60px',
//                 display: 'flex',
//                 width: '100%'
//               }}
//             >
//               <div
//                 ref={props.ref}
//                 style={{
//                   height: '5px',
//                   width: '100%',
//                   borderRadius: '4px',
//                   // background: getTrackBackground({
//                   //   values: this.state.values,
//                   //   colors: ['#ccc', '#548BF4', '#ccc'],
//                   //   min: MIN,
//                   //   max: MAX
//                   // }),
//                   alignSelf: 'center'
//                 }}
//               >
//                 {children}
//               </div>
//             </div>
//           )}
//           renderThumb={({ index, props, isDragged }) => (
//             <div
//               {...props}
//               style={{
//                 ...props.style,
//                 height: '42px',
//                 width: '42px',
//                 borderRadius: '4px',
//                 backgroundColor: '#FFF',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 boxShadow: '0px 2px 6px #AAA'
//               }}
//             >
//               <div
//                 style={{
//                   position: 'absolute',
//                   top: '-28px',
//                   color: '#fff',
//                   fontWeight: 'bold',
//                   fontSize: '14px',
//                   fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
//                   padding: '4px',
//                   borderRadius: '4px',
//                   backgroundColor: '#548BF4'
//                 }}
//               >
//                 {this.state.values[index].toFixed(1)}
//               </div>
//               <div
//                 style={{
//                   height: '16px',
//                   width: '5px',
//                   backgroundColor: isDragged ? '#548BF4' : '#CCC'
//                 }}
//               />
//             </div>
//           )}
//         />
//       </div>
//     );
//   }
// }

// export default LabeledTwoThumbs;
