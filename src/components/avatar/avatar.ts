import {
  attr,
  customElement,
  FASTElement,
  html,
  observable,
} from "@microsoft/fast-element";
import { avatarStyles } from "./avatar.styles";
import { avatarTemplate } from "./avatar.template";
import { testItem, TestType } from "./test";

const defaultAvatarSrc =
  "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light";

@customElement({
  name: "person-avatar",
  template: avatarTemplate,
  styles: avatarStyles,
})
export class Avatar extends FASTElement {
  @observable showFullInfo = false;
  @attr({ attribute: "avatar-src" }) avatarSrc: string = defaultAvatarSrc;
  @attr({ mode: "boolean" }) fullInfoDisabled: boolean = false;

  /**
   * entityID used to display label from the selector of entityID {@link Users.entityColumn} function.
   * @internal
   */
  @attr resourceName = 'ALL_USERS';

  /**
   * entityID used to control the definition of an optional entity column which is created with the {@link Users.entityColumn} function.
   * @internal
   */
  @attr entityID: string = 'COUNTERPARTY_ID';

  /**
   * entityID used to display label from the selector of entityID {@link Users.entityColumn} function.
   * @internal
   */
  @attr entityLabelKey: string = 'NAME';

  /**
   * entityID used to control the definition of an optional entity column which is created with the {@link Users.entityColumn} function.
   * @internal
   */
  @attr entityLabel: string = 'Counterparty';

  logFruit(fruit: TestType) {
    console.log(fruit);
    console.log(testItem);
  }
}
