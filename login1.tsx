import { twcn } from "@gwayva/tailwind";
import { Button, Checkbox, Label, Textbox } from "@gwayva/webui";
import type { I18n } from "keycloakify/login/i18n";
import type { KcContext } from "keycloakify/login/KcContext";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { withKcLoginTemplate } from "../KcTemplate";

const LoginPageComponent = (
  props: PageProps<
    Extract<
      KcContext,
      {
        pageId: "login.ftl";
      }
    >,
    I18n
  >,
) => {
  console.log(props);

  // container query
  return (
    <>
      <div className={"my-8"}>
        <h1 className={"font-bold text-3xl"}>Log in</h1>
        <p className={"text-gray-600"}>Welcome back! Enter your details.</p>
      </div>
      <form className={twcn("min-w-[340px] max-w-[436px] my-auto")}>
        <div className={"grid gap-5"}>
          <Textbox label={"Email"} required />
          <Textbox type={"password"} label={"Password"} required />
          <div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </div>
        </div>
        <Button className={"bg-primary my-6"}>Log in</Button>
      </form>
    </>
  );
};

export default withKcLoginTemplate(LoginPageComponent);
