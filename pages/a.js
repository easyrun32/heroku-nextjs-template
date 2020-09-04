// export default (props) => {
//   console.log(props);
//   return <div>client a</div>;
// };

const a = (props) => {
  console.log(props);
  return <div>client a with a const a</div>;
};

a.getInitialProps = ({ query }) => {
  return { myParams: query };
};

export default a;
