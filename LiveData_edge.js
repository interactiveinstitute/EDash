/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['open-sans, sans-serif']='<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>';
    fonts['klavika']='';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'EDash_PiechartShadow',
                type: 'image',
                rect: ['1068px', '141px','600px','601px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"EDash_PiechartShadow.png",'0px','0px']
            },
            {
                id: 'EDash_Main',
                type: 'image',
                rect: ['0px', '0px','1920px','1920px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"EDash_Main.png",'0px','0px']
            },
            {
                id: 'CoffeWDial',
                type: 'rect',
                rect: ['200px', '945px','auto','auto','auto', 'auto']
            },
            {
                id: 'KettleWDial',
                type: 'rect',
                rect: ['201px', '521px','auto','auto','auto', 'auto']
            },
            {
                id: 'MicroWDial',
                type: 'rect',
                rect: ['201px', '521px','auto','auto','auto', 'auto']
            },
            {
                id: 'PcWDial',
                type: 'rect',
                rect: ['201px', '521px','auto','auto','auto', 'auto']
            },
            {
                id: 'EDash_Microwave_C',
                type: 'image',
                rect: ['1071px', '944px','214px','213px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"EDash_Microwave_C.png",'0px','0px']
            },
            {
                id: 'EDash_Kettle_C',
                type: 'image',
                rect: ['635px', '944px','214px','213px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"EDash_Kettle_C.png",'0px','0px']
            },
            {
                id: 'EDash_MeetingroomPC_C',
                type: 'image',
                rect: ['1506px', '944px','214px','214px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"EDash_MeetingroomPC_C.png",'0px','0px']
            },
            {
                id: 'EDash_CoffeMachine_C',
                type: 'image',
                rect: ['200px', '944px','214px','214px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"EDash_CoffeMachine_C.png",'0px','0px']
            },
            {
                id: 'CoffeWatt',
                type: 'text',
                rect: ['240px', '1039px','133px','33px','auto', 'auto'],
                text: "0000",
                align: "center",
                font: ['open-sans, sans-serif', 24, "rgba(255,255,255,1.00)", "600", "none", "normal"]
            },
            {
                id: 'KettleWatt',
                type: 'text',
                rect: ['676px', '1039px','133px','33px','auto', 'auto'],
                text: "0000",
                align: "center",
                font: ['open-sans, sans-serif', 24, "rgba(255,255,255,1.00)", "600", "none", "normal"]
            },
            {
                id: 'MicroWatt',
                type: 'text',
                rect: ['1114px', '1039px','133px','33px','auto', 'auto'],
                text: "0000",
                align: "center",
                font: ['open-sans, sans-serif', 24, "rgba(255,255,255,1.00)", "600", "none", "normal"]
            },
            {
                id: 'PcWatt',
                type: 'text',
                rect: ['1546px', '1039px','133px','33px','auto', 'auto'],
                text: "0000",
                align: "center",
                font: ['open-sans, sans-serif', 24, "rgba(255,255,255,1.00)", "600", "none", "normal"]
            },
            {
                id: 'myPieLegend',
                type: 'text',
                rect: ['1546px', '252px','326px','356px','auto', 'auto'],
                text: "Legend text",
                align: "left",
                font: ['open-sans, sans-serif', 18, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'CoffeWDial',
                symbolName: 'CoffeWDial',
                autoPlay: {

                }
            },
            {
                id: 'MicroWDial',
                symbolName: 'CoffeWDial',
                autoPlay: {

                }
            },
            {
                id: 'PcWDial',
                symbolName: 'CoffeWDial',
                autoPlay: {

                }
            },
            {
                id: 'KettleWDial',
                symbolName: 'CoffeWDial',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_MicroWatt}": [
                ["style", "top", '1039px'],
                ["style", "width", '133px'],
                ["style", "height", '33px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '1114px'],
                ["style", "font-size", '24px']
            ],
            "${_EnergydesignDash_Main2}": [
                ["style", "left", '-6997px'],
                ["style", "top", '-4426px']
            ],
            "${_CoffeWDial}": [
                ["style", "left", '200px'],
                ["style", "top", '945px']
            ],
            "${_EDash_Kettle_C}": [
                ["style", "left", '635px'],
                ["style", "top", '944px']
            ],
            "${_EDash_MeetingroomPC_C}": [
                ["style", "top", '944px'],
                ["style", "left", '1506px']
            ],
            "${_KettleWatt}": [
                ["style", "top", '1039px'],
                ["style", "font-size", '24px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '33px'],
                ["style", "font-weight", '600'],
                ["style", "left", '676px'],
                ["style", "width", '133px']
            ],
            "${_EDash_PiechartShadow}": [
                ["style", "left", '1068px'],
                ["style", "top", '141px']
            ],
            "${_MicroWDial}": [
                ["style", "left", '1071px'],
                ["style", "top", '945px']
            ],
            "${_PcWatt}": [
                ["style", "top", '1039px'],
                ["style", "font-size", '24px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '33px'],
                ["style", "font-weight", '600'],
                ["style", "left", '1546px'],
                ["style", "width", '133px']
            ],
            "${_EDash_CoffeMachine_C}": [
                ["style", "left", '200px'],
                ["style", "top", '944px']
            ],
            "${_EDash_Microwave_C}": [
                ["style", "left", '1071px'],
                ["style", "top", '944px']
            ],
            "${_myPieLegend}": [
                ["style", "top", '252px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '1546px'],
                ["style", "font-size", '18px']
            ],
            "${_PcWDial}": [
                ["style", "left", '1506px'],
                ["style", "top", '945px']
            ],
            "${_KettleWDial}": [
                ["style", "left", '635px'],
                ["style", "top", '945px']
            ],
            "${_EDash_Main}": [
                ["style", "height", '1920px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '1920px']
            ],
            "${_canvas-holder}": [
                ["transform", "translateX", '-2px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(229,229,229,1.00)'],
                ["style", "min-width", '640px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '1920px'],
                ["style", "width", '1920px']
            ],
            "${_CoffeWatt}": [
                ["style", "top", '1039px'],
                ["style", "width", '133px'],
                ["style", "height", '33px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '240px'],
                ["style", "font-size", '24px']
            ],
            "${_chart-area}": [
                ["transform", "translateX", '1069px'],
                ["style", "height", '400px'],
                ["style", "display", 'inline-block'],
                ["transform", "translateY", '146px'],
                ["style", "width", '400px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid251", tween: [ "style", "${_KettleWDial}", "top", '945px', { fromValue: '945px'}], position: 0, duration: 0 },
                { id: "eid244", tween: [ "style", "${_MicroWDial}", "left", '1071px', { fromValue: '1071px'}], position: 0, duration: 0 },
                { id: "eid252", tween: [ "style", "${_PcWDial}", "top", '945px', { fromValue: '945px'}], position: 0, duration: 0 },
                { id: "eid245", tween: [ "style", "${_KettleWDial}", "left", '635px', { fromValue: '635px'}], position: 0, duration: 0 },
                { id: "eid250", tween: [ "style", "${_MicroWDial}", "top", '945px', { fromValue: '945px'}], position: 0, duration: 0 },
                { id: "eid246", tween: [ "style", "${_PcWDial}", "left", '1506px', { fromValue: '1506px'}], position: 0, duration: 0 }            ]
        }
    }
},
"CoffeWDial": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'EDash_DialPointer',
                    type: 'image',
                    rect: ['0px', '1px', '214px', '213px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/EDash_DialPointer.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_EDash_DialPointer}": [
                ["style", "left", '0px'],
                ["style", "top", '1px']
            ],
            "${_EnergydesignDash_DialPointer2}": [
                ["style", "top", '-924px'],
                ["style", "left", '-532px']
            ],
            "${symbolSelector}": [
                ["style", "height", '214px'],
                ["style", "width", '214px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"myPie": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'myPie',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '318px', '318px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_myPie}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '318px'],
                ["style", "width", '318px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"DialCircle": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'EDash_DialCircle',
                    type: 'image',
                    rect: ['0px', '0px', '213px', '213px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/EDash_DialCircle.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_EDash_DialCircle}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '213px'],
                ["style", "width", '213px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDash");
