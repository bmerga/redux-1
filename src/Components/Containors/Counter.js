import { Connect, connect } from "react-redux"
import counter from "../Components/Counter"
import { incrementActionCreator, decrementActionCreator } from "../Action"

const mapStateToProps = (state) =>({
  count: state.count,
});
const mapDispatchToProps = (state) => ({
    incrementActionCreator,
    decrementActionCreator
})

export default connect(mapStateToProps, mapDispatchToProps)
