import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  AddSubcontractor,
  Calendar,
  CreateAccount,
  FindSubcontractor,
  MainSection,
  Statistics,
} from "../../templates";

const MainSwitch = () => {
  const cookie = useSelector((store) => store.cookie[0]);
  const user = useSelector((store) => store.user);
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <MainSection />} />
        <Route exact path="/createAccount" render={() => <CreateAccount />} />

        {user.length || cookie.isCookie ? (
          <Route
            exact
            path="/add-subcontractor"
            render={() => <AddSubcontractor />}
          />
        ) : (
          ""
        )}
        {user.length || cookie.isCookie ? (
          <Route
            exact
            path="/find-subcontractor"
            render={() => <FindSubcontractor />}
          />
        ) : (
          ""
        )}
        {user.length || cookie.isCookie ? (
          <Route exact path="/statistics" render={() => <Statistics />} />
        ) : (
          ""
        )}
        {user.length || cookie.isCookie ? (
          <Route exact path="/calendar" render={() => <Calendar />} />
        ) : (
          ""
        )}
        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default MainSwitch;
