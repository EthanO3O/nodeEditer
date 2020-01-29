import TabBar from "./ui_modules/tabBar"
import ToolsBar from "./ui_modules/toolsBar"
import ModulesBar from "./ui_modules/modulesBar"
import WorkSpace from "./ui_modules/workSpace"
import MainMenu from "./ui_modules/mainMenu"
import Revoker from "./func_modules/revoker";
import SrcGenerator from "./func_modules/srcGenerator";
import NodeSelector from "./func_modules/nodeSelector";
import Input from "./func_modules/input";
import CodeGenerator from "./func_modules/codeGenerator";

class NodeEditer {
    constructor(){
        this.tabBar= new TabBar();
        this.toolsBar= new ToolsBar();
        this.modulesBar= new ModulesBar();
        this.workSpace= new WorkSpace();
        this.mainMenu= new MainMenu();
        this.revoker= new Revoker();
        this.srcGenerator= new SrcGenerator();
        this.nodeSelector= new NodeSelector();
        this.input = new Input();
        this.codeGenerator = new CodeGenerator();
        this.htmlNodeList=[];
        this.cssNodeList=[];
    }
}
export default NodeEditer