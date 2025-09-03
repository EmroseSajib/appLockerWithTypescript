const CombinedProvider = ({ components = [], children, ...rest }) =>
  components.reduceRight(
    (acc, Provider) => <Provider {...rest}>{acc}</Provider>,
    children
  );
export default CombinedProvider;
