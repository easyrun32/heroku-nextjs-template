const a = (props) => {
  const a = props.myParams.id.A;
  console.log(props.myParams.id.A);
  return (
    <div>
      client a with a const a
      <br />
      {a}
      <br />
      <button>A </button>
    </div>
  );
};

a.getInitialProps = ({ query }) => {
  return { myParams: query };
};

export default a;
