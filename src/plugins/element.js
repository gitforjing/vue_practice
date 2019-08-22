import Vue from 'vue'
import {
  Tree,
  Steps,
  Step,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Switch,
  Loading,
  MessageBox,
  DatePicker,
  Checkbox,
  Scrollbar,
  Message,
  Button,
  Menu,
  Submenu,
  MenuItem,
  Card,
  Form,
  Input,
  FormItem,
  Select,
  Option,
  Breadcrumb,
  BreadcrumbItem,
  Tooltip,
  Popover,
  Table,
  TableColumn,
  Pagination,
  Dialog,
  Tabs,
  TabPane,
  Upload,
  Col,
  Row,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Notification,
  Tag,
  Divider,
  Backtop,
  Icon,
  Progress
} from 'element-ui'

Vue.prototype.$message = Message
Vue.use(Progress)
Vue.use(Icon)
Vue.use(Backtop)
Vue.use(Divider)
Vue.use(Tag)
Vue.use(CheckboxGroup)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Col)
Vue.use(Row)
Vue.use(Steps)
Vue.use(Tree)
Vue.use(Step)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Checkbox)
Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Card)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tooltip)
Vue.use(Popover)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Upload)
Vue.use(Scrollbar)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
