import {getConfigFile, updateConfigFile} from './SmartMirrorEffect'
import { FETCH_CONFIG_FILE, UPDATE_MODULES } from '../actions/types';
import store from '../store'



export const fetchConfig = () => dispatch => {
    getConfigFile()
      .then(data =>
        {
        let formattedData = formatModules(data);
        dispatch({
          type: FETCH_CONFIG_FILE,
          payload: data,
          formattedModules: formattedData
        })
        }
      );
  };
  export const updateConfig = (updatedModules) => (dispatch,getState) =>{
      console.log(getState.postReducer());
  }

 
 export const updateModule = (mod, modName) => (dispatch, getState) =>{
    let current = getState().global.configFormatModules;
    // remove old module
    current = current.filter(function(value, index, arr){ return value.module != modName;});
    // add updated module
    current.push(reformatModule(mod, modName));
    let config = getState().global.config;
    config.modules = current;
    updateConfigFile(config);
    console.log(config);
    dispatch({
        type: UPDATE_MODULES,
        payload:current
    })
    console.log(current);

 }

 function formatModules(data){
    let dataCopy = JSON.parse(JSON.stringify(data));
    let modulesFormated = [];
     for(let mod in dataCopy.modules){
         modulesFormated.push(formatModule(mod,dataCopy))
         
     }
     return modulesFormated
 }
 function formatModule(index, data){
     let mod = data.modules[index];
     let formatted = {
         "name":"",
         "attributes":[]
        };
     formatted.name = mod.module;
     delete mod.module;
     if(mod.config){
       mod = {
            ...mod,
            ...mod.config
        }
        delete mod.config
    }
     for(let attr in mod){
        //  console.log(attr);
         let attribute  = { 
             "name":"",
             "type":"",
             "options":[]
            };
         attribute.name = attr;

         if(data[`${attr}Options`]){
            attribute.type = "drop-down";
            attribute.options = data[`${attr}Options`];
         }
         else{
             attribute.type="text";

        }
        formatted.attributes.push({
            "name":attribute.name,
            "value":mod[attr],
            "type":attribute.type,
            "options":attribute.options
        })
     }
     return formatted;


 }

 function reformatModule(formattedMod, modName){
     console.log(formattedMod)
     let reformatedMod = {
         module:"",
         header:"",
         position:"",
         config:{},

     }
     reformatedMod.module = modName;
     for(let attr in formattedMod){
         console.log(formattedMod[attr])
         if(formattedMod[attr].name == "position"){
             reformatedMod.position = formattedMod[attr].value;         
        } else{
            if(formattedMod[attr].name == "header"){
                reformatedMod.header = formattedMod[attr].value;         

            } else {
                reformatedMod.config[formattedMod[attr].name] = formattedMod[attr].value
                // reformatedMod.config.push({
                //     [formattedMod[attr].name]: formattedMod[attr].value
                // })
        }
    }
    console.log(reformatedMod);

     }

    /*
        take in mod as format of 
        [
            name: ''
            attributes: ''
        ]
        to 
        {
            module: ""
            header: ""
            position: ""
            config: []
        }
    */

     return reformatedMod
 }