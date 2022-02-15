import "./Container.modules.css";

const Container = (props) => {
  return (
    <div className={'container min-height' }>{props.children}</div>
  )
};

export default Container;
