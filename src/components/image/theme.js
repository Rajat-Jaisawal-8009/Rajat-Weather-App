import bluestar from './themeImg/bluestar.png';
import nebulaGalax from './themeImg/nebula.png';
import galaxy from './themeImg/galaxy-bg.png';
import lovnebula from './themeImg/lovnebula.png';
import milkiway from './themeImg/milkyway.png';



const themes =[
  {
    name:'Gray (Default)',
    backgroundTheme : 'linear-gradient(to right, #283048, #859398)',
     boxColor :'#0000004a'
  },
 
{
  name:'Blue shade',
  backgroundTheme : 'linear-gradient(35deg, rgb(41 39 74) 9%, rgba(47, 40, 115, 1) 62%, rgb(85 40 155) 100%)',
  boxColor :'#4d4cbb61'
},
{
  name:'Blue Sea',
  backgroundTheme:'linear-gradient(to top, #09203f 0%, #537895 100%)',
   boxColor :'#ffffff00'
},


{
  name:'Black shade',
  backgroundTheme : 'linear-gradient(to right, #434343 0%, black 100%)',
   boxColor :'#ffffff17'
},

{
  name:'BlueBarry',
  backgroundTheme : 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
   boxColor :'#ffffff17'
},

{
  name:'Deep Sea',
  backgroundTheme : 'linear-gradient(to right, #2c3e50, #4ca1af)',
   boxColor :'#ffffff17'
},
{
  name:'White shade',
  backgroundTheme:' linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
   boxColor :'#a1a1a1'
},
{
  name:'Purpal shade',
  backgroundTheme:'linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)',
   boxColor :'#b665d95e'
},
{
  name:'LightGray',
  backgroundTheme:'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) ',
   boxColor :'#989898'
},
{
  name:'Sun shade',
  backgroundTheme:' linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
   boxColor :'#ff00004a'
},



{
  name:'Milkiway',
  backgroundTheme : milkiway,
  boxColor : '#10387270'
},
{
  name:'Lovnebula',
  backgroundTheme : lovnebula,
  boxColor : '#5008087a'
},

{
name:'Bluestar',
backgroundTheme : bluestar,
boxColor : '#10387270'
},
{
name:'NebulaGalax',
backgroundTheme : nebulaGalax,
boxColor : '#10387270'
},
{
name:'Galax',
backgroundTheme : galaxy,
boxColor :'#f800ff36'
},

]

export default themes;