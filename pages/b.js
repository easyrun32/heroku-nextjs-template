const b = (props) => {
  console.log(props);
  return (
    <div>
      client b
      <br />
      <br />
      <button>b </button>
    </div>
  );
};

b.getInitialProps = ({ query }) => {
  return { myParams: query };
};

export default b;
