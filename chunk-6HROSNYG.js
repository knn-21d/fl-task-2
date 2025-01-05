import{a as Fe}from"./chunk-EMXJTO3P.js";import{a as Me}from"./chunk-XZWR2GPQ.js";import{Fa as Ce,N as de,O as Ae,S as qe,T as Ve,U as $e,V as Le,W as Oe,Z as pe,h as r,ia as ne,j as ue}from"./chunk-X3ZV6C7C.js";import"./chunk-O3APSYOQ.js";import"./chunk-337ES2G7.js";import"./chunk-OWRAVFPR.js";import"./chunk-7IQ7MVDA.js";var fe=function(){var e=r(function($,i,a,l){for(a=a||{},l=$.length;l--;a[$[l]]=i);return a},"o"),t=[1,3],c=[1,4],d=[1,5],u=[1,6],p=[5,6,8,9,11,13,31,32,33,34,35,36,44,62,63],g=[1,18],h=[2,7],o=[1,22],_=[1,23],R=[1,24],k=[1,25],I=[1,26],w=[1,27],q=[1,20],v=[1,28],A=[1,29],F=[62,63],_e=[5,8,9,11,13,31,32,33,34,35,36,44,51,53,62,63],Ee=[1,47],Re=[1,48],me=[1,49],be=[1,50],ke=[1,51],Ie=[1,52],Se=[1,53],O=[53,54],D=[1,64],P=[1,60],Y=[1,61],U=[1,62],B=[1,63],Q=[1,65],j=[1,69],X=[1,70],J=[1,67],Z=[1,68],S=[5,8,9,11,13,31,32,33,34,35,36,44,62,63],se={trace:r(function(){},"trace"),yy:{},symbols_:{error:2,start:3,directive:4,NEWLINE:5,RD:6,diagram:7,EOF:8,acc_title:9,acc_title_value:10,acc_descr:11,acc_descr_value:12,acc_descr_multiline_value:13,requirementDef:14,elementDef:15,relationshipDef:16,requirementType:17,requirementName:18,STRUCT_START:19,requirementBody:20,ID:21,COLONSEP:22,id:23,TEXT:24,text:25,RISK:26,riskLevel:27,VERIFYMTHD:28,verifyType:29,STRUCT_STOP:30,REQUIREMENT:31,FUNCTIONAL_REQUIREMENT:32,INTERFACE_REQUIREMENT:33,PERFORMANCE_REQUIREMENT:34,PHYSICAL_REQUIREMENT:35,DESIGN_CONSTRAINT:36,LOW_RISK:37,MED_RISK:38,HIGH_RISK:39,VERIFY_ANALYSIS:40,VERIFY_DEMONSTRATION:41,VERIFY_INSPECTION:42,VERIFY_TEST:43,ELEMENT:44,elementName:45,elementBody:46,TYPE:47,type:48,DOCREF:49,ref:50,END_ARROW_L:51,relationship:52,LINE:53,END_ARROW_R:54,CONTAINS:55,COPIES:56,DERIVES:57,SATISFIES:58,VERIFIES:59,REFINES:60,TRACES:61,unqString:62,qString:63,$accept:0,$end:1},terminals_:{2:"error",5:"NEWLINE",6:"RD",8:"EOF",9:"acc_title",10:"acc_title_value",11:"acc_descr",12:"acc_descr_value",13:"acc_descr_multiline_value",19:"STRUCT_START",21:"ID",22:"COLONSEP",24:"TEXT",26:"RISK",28:"VERIFYMTHD",30:"STRUCT_STOP",31:"REQUIREMENT",32:"FUNCTIONAL_REQUIREMENT",33:"INTERFACE_REQUIREMENT",34:"PERFORMANCE_REQUIREMENT",35:"PHYSICAL_REQUIREMENT",36:"DESIGN_CONSTRAINT",37:"LOW_RISK",38:"MED_RISK",39:"HIGH_RISK",40:"VERIFY_ANALYSIS",41:"VERIFY_DEMONSTRATION",42:"VERIFY_INSPECTION",43:"VERIFY_TEST",44:"ELEMENT",47:"TYPE",49:"DOCREF",51:"END_ARROW_L",53:"LINE",54:"END_ARROW_R",55:"CONTAINS",56:"COPIES",57:"DERIVES",58:"SATISFIES",59:"VERIFIES",60:"REFINES",61:"TRACES",62:"unqString",63:"qString"},productions_:[0,[3,3],[3,2],[3,4],[4,2],[4,2],[4,1],[7,0],[7,2],[7,2],[7,2],[7,2],[7,2],[14,5],[20,5],[20,5],[20,5],[20,5],[20,2],[20,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[27,1],[27,1],[27,1],[29,1],[29,1],[29,1],[29,1],[15,5],[46,5],[46,5],[46,2],[46,1],[16,5],[16,5],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[18,1],[18,1],[23,1],[23,1],[25,1],[25,1],[45,1],[45,1],[48,1],[48,1],[50,1],[50,1]],performAction:r(function(i,a,l,n,f,s,K){var E=s.length-1;switch(f){case 4:this.$=s[E].trim(),n.setAccTitle(this.$);break;case 5:case 6:this.$=s[E].trim(),n.setAccDescription(this.$);break;case 7:this.$=[];break;case 13:n.addRequirement(s[E-3],s[E-4]);break;case 14:n.setNewReqId(s[E-2]);break;case 15:n.setNewReqText(s[E-2]);break;case 16:n.setNewReqRisk(s[E-2]);break;case 17:n.setNewReqVerifyMethod(s[E-2]);break;case 20:this.$=n.RequirementType.REQUIREMENT;break;case 21:this.$=n.RequirementType.FUNCTIONAL_REQUIREMENT;break;case 22:this.$=n.RequirementType.INTERFACE_REQUIREMENT;break;case 23:this.$=n.RequirementType.PERFORMANCE_REQUIREMENT;break;case 24:this.$=n.RequirementType.PHYSICAL_REQUIREMENT;break;case 25:this.$=n.RequirementType.DESIGN_CONSTRAINT;break;case 26:this.$=n.RiskLevel.LOW_RISK;break;case 27:this.$=n.RiskLevel.MED_RISK;break;case 28:this.$=n.RiskLevel.HIGH_RISK;break;case 29:this.$=n.VerifyType.VERIFY_ANALYSIS;break;case 30:this.$=n.VerifyType.VERIFY_DEMONSTRATION;break;case 31:this.$=n.VerifyType.VERIFY_INSPECTION;break;case 32:this.$=n.VerifyType.VERIFY_TEST;break;case 33:n.addElement(s[E-3]);break;case 34:n.setNewElementType(s[E-2]);break;case 35:n.setNewElementDocRef(s[E-2]);break;case 38:n.addRelationship(s[E-2],s[E],s[E-4]);break;case 39:n.addRelationship(s[E-2],s[E-4],s[E]);break;case 40:this.$=n.Relationships.CONTAINS;break;case 41:this.$=n.Relationships.COPIES;break;case 42:this.$=n.Relationships.DERIVES;break;case 43:this.$=n.Relationships.SATISFIES;break;case 44:this.$=n.Relationships.VERIFIES;break;case 45:this.$=n.Relationships.REFINES;break;case 46:this.$=n.Relationships.TRACES;break}},"anonymous"),table:[{3:1,4:2,6:t,9:c,11:d,13:u},{1:[3]},{3:8,4:2,5:[1,7],6:t,9:c,11:d,13:u},{5:[1,9]},{10:[1,10]},{12:[1,11]},e(p,[2,6]),{3:12,4:2,6:t,9:c,11:d,13:u},{1:[2,2]},{4:17,5:g,7:13,8:h,9:c,11:d,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:_,33:R,34:k,35:I,36:w,44:q,62:v,63:A},e(p,[2,4]),e(p,[2,5]),{1:[2,1]},{8:[1,30]},{4:17,5:g,7:31,8:h,9:c,11:d,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:_,33:R,34:k,35:I,36:w,44:q,62:v,63:A},{4:17,5:g,7:32,8:h,9:c,11:d,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:_,33:R,34:k,35:I,36:w,44:q,62:v,63:A},{4:17,5:g,7:33,8:h,9:c,11:d,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:_,33:R,34:k,35:I,36:w,44:q,62:v,63:A},{4:17,5:g,7:34,8:h,9:c,11:d,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:_,33:R,34:k,35:I,36:w,44:q,62:v,63:A},{4:17,5:g,7:35,8:h,9:c,11:d,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:_,33:R,34:k,35:I,36:w,44:q,62:v,63:A},{18:36,62:[1,37],63:[1,38]},{45:39,62:[1,40],63:[1,41]},{51:[1,42],53:[1,43]},e(F,[2,20]),e(F,[2,21]),e(F,[2,22]),e(F,[2,23]),e(F,[2,24]),e(F,[2,25]),e(_e,[2,49]),e(_e,[2,50]),{1:[2,3]},{8:[2,8]},{8:[2,9]},{8:[2,10]},{8:[2,11]},{8:[2,12]},{19:[1,44]},{19:[2,47]},{19:[2,48]},{19:[1,45]},{19:[2,53]},{19:[2,54]},{52:46,55:Ee,56:Re,57:me,58:be,59:ke,60:Ie,61:Se},{52:54,55:Ee,56:Re,57:me,58:be,59:ke,60:Ie,61:Se},{5:[1,55]},{5:[1,56]},{53:[1,57]},e(O,[2,40]),e(O,[2,41]),e(O,[2,42]),e(O,[2,43]),e(O,[2,44]),e(O,[2,45]),e(O,[2,46]),{54:[1,58]},{5:D,20:59,21:P,24:Y,26:U,28:B,30:Q},{5:j,30:X,46:66,47:J,49:Z},{23:71,62:v,63:A},{23:72,62:v,63:A},e(S,[2,13]),{22:[1,73]},{22:[1,74]},{22:[1,75]},{22:[1,76]},{5:D,20:77,21:P,24:Y,26:U,28:B,30:Q},e(S,[2,19]),e(S,[2,33]),{22:[1,78]},{22:[1,79]},{5:j,30:X,46:80,47:J,49:Z},e(S,[2,37]),e(S,[2,38]),e(S,[2,39]),{23:81,62:v,63:A},{25:82,62:[1,83],63:[1,84]},{27:85,37:[1,86],38:[1,87],39:[1,88]},{29:89,40:[1,90],41:[1,91],42:[1,92],43:[1,93]},e(S,[2,18]),{48:94,62:[1,95],63:[1,96]},{50:97,62:[1,98],63:[1,99]},e(S,[2,36]),{5:[1,100]},{5:[1,101]},{5:[2,51]},{5:[2,52]},{5:[1,102]},{5:[2,26]},{5:[2,27]},{5:[2,28]},{5:[1,103]},{5:[2,29]},{5:[2,30]},{5:[2,31]},{5:[2,32]},{5:[1,104]},{5:[2,55]},{5:[2,56]},{5:[1,105]},{5:[2,57]},{5:[2,58]},{5:D,20:106,21:P,24:Y,26:U,28:B,30:Q},{5:D,20:107,21:P,24:Y,26:U,28:B,30:Q},{5:D,20:108,21:P,24:Y,26:U,28:B,30:Q},{5:D,20:109,21:P,24:Y,26:U,28:B,30:Q},{5:j,30:X,46:110,47:J,49:Z},{5:j,30:X,46:111,47:J,49:Z},e(S,[2,14]),e(S,[2,15]),e(S,[2,16]),e(S,[2,17]),e(S,[2,34]),e(S,[2,35])],defaultActions:{8:[2,2],12:[2,1],30:[2,3],31:[2,8],32:[2,9],33:[2,10],34:[2,11],35:[2,12],37:[2,47],38:[2,48],40:[2,53],41:[2,54],83:[2,51],84:[2,52],86:[2,26],87:[2,27],88:[2,28],90:[2,29],91:[2,30],92:[2,31],93:[2,32],95:[2,55],96:[2,56],98:[2,57],99:[2,58]},parseError:r(function(i,a){if(a.recoverable)this.trace(i);else{var l=new Error(i);throw l.hash=a,l}},"parseError"),parse:r(function(i){var a=this,l=[0],n=[],f=[null],s=[],K=this.table,E="",te=0,Te=0,Ne=0,He=2,ve=1,We=s.slice.call(arguments,1),m=Object.create(this.lexer),C={yy:{}};for(var ae in this.yy)Object.prototype.hasOwnProperty.call(this.yy,ae)&&(C.yy[ae]=this.yy[ae]);m.setInput(i,C.yy),C.yy.lexer=m,C.yy.parser=this,typeof m.yylloc>"u"&&(m.yylloc={});var le=m.yylloc;s.push(le);var Ke=m.options&&m.options.ranges;typeof C.yy.parseError=="function"?this.parseError=C.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ze(N){l.length=l.length-2*N,f.length=f.length-N,s.length=s.length-N}r(ze,"popStack");function xe(){var N;return N=n.pop()||m.lex()||ve,typeof N!="number"&&(N instanceof Array&&(n=N,N=n.pop()),N=a.symbols_[N]||N),N}r(xe,"lex");for(var b,oe,M,x,Tt,ce,H={},ie,V,we,re;;){if(M=l[l.length-1],this.defaultActions[M]?x=this.defaultActions[M]:((b===null||typeof b>"u")&&(b=xe()),x=K[M]&&K[M][b]),typeof x>"u"||!x.length||!x[0]){var he="";re=[];for(ie in K[M])this.terminals_[ie]&&ie>He&&re.push("'"+this.terminals_[ie]+"'");m.showPosition?he="Parse error on line "+(te+1)+`:
`+m.showPosition()+`
Expecting `+re.join(", ")+", got '"+(this.terminals_[b]||b)+"'":he="Parse error on line "+(te+1)+": Unexpected "+(b==ve?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(he,{text:m.match,token:this.terminals_[b]||b,line:m.yylineno,loc:le,expected:re})}if(x[0]instanceof Array&&x.length>1)throw new Error("Parse Error: multiple actions possible at state: "+M+", token: "+b);switch(x[0]){case 1:l.push(b),f.push(m.yytext),s.push(m.yylloc),l.push(x[1]),b=null,oe?(b=oe,oe=null):(Te=m.yyleng,E=m.yytext,te=m.yylineno,le=m.yylloc,Ne>0&&Ne--);break;case 2:if(V=this.productions_[x[1]][1],H.$=f[f.length-V],H._$={first_line:s[s.length-(V||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(V||1)].first_column,last_column:s[s.length-1].last_column},Ke&&(H._$.range=[s[s.length-(V||1)].range[0],s[s.length-1].range[1]]),ce=this.performAction.apply(H,[E,Te,te,C.yy,x[1],f,s].concat(We)),typeof ce<"u")return ce;V&&(l=l.slice(0,-1*V*2),f=f.slice(0,-1*V),s=s.slice(0,-1*V)),l.push(this.productions_[x[1]][0]),f.push(H.$),s.push(H._$),we=K[l[l.length-2]][l[l.length-1]],l.push(we);break;case 3:return!0}}return!0},"parse")},Qe=function(){var $={EOF:1,parseError:r(function(a,l){if(this.yy.parser)this.yy.parser.parseError(a,l);else throw new Error(a)},"parseError"),setInput:r(function(i,a){return this.yy=a||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:r(function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var a=i.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},"input"),unput:r(function(i){var a=i.length,l=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var f=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===n.length?this.yylloc.first_column:0)+n[n.length-l.length].length-l[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[f[0],f[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},"unput"),more:r(function(){return this._more=!0,this},"more"),reject:r(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:r(function(i){this.unput(this.match.slice(i))},"less"),pastInput:r(function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:r(function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:r(function(){var i=this.pastInput(),a=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+a+"^"},"showPosition"),test_match:r(function(i,a){var l,n,f;if(this.options.backtrack_lexer&&(f={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(f.yylloc.range=this.yylloc.range.slice(0))),n=i[0].match(/(?:\r\n?|\n).*/g),n&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],l=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var s in f)this[s]=f[s];return!1}return!1},"test_match"),next:r(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,a,l,n;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),s=0;s<f.length;s++)if(l=this._input.match(this.rules[f[s]]),l&&(!a||l[0].length>a[0].length)){if(a=l,n=s,this.options.backtrack_lexer){if(i=this.test_match(l,f[s]),i!==!1)return i;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(i=this.test_match(a,f[n]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:r(function(){var a=this.next();return a||this.lex()},"lex"),begin:r(function(a){this.conditionStack.push(a)},"begin"),popState:r(function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:r(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:r(function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},"topState"),pushState:r(function(a){this.begin(a)},"pushState"),stateStackSize:r(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:r(function(a,l,n,f){var s=f;switch(n){case 0:return"title";case 1:return this.begin("acc_title"),9;break;case 2:return this.popState(),"acc_title_value";break;case 3:return this.begin("acc_descr"),11;break;case 4:return this.popState(),"acc_descr_value";break;case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:return 5;case 9:break;case 10:break;case 11:break;case 12:return 8;case 13:return 6;case 14:return 19;case 15:return 30;case 16:return 22;case 17:return 21;case 18:return 24;case 19:return 26;case 20:return 28;case 21:return 31;case 22:return 32;case 23:return 33;case 24:return 34;case 25:return 35;case 26:return 36;case 27:return 37;case 28:return 38;case 29:return 39;case 30:return 40;case 31:return 41;case 32:return 42;case 33:return 43;case 34:return 44;case 35:return 55;case 36:return 56;case 37:return 57;case 38:return 58;case 39:return 59;case 40:return 60;case 41:return 61;case 42:return 47;case 43:return 49;case 44:return 51;case 45:return 54;case 46:return 53;case 47:this.begin("string");break;case 48:this.popState();break;case 49:return"qString";case 50:return l.yytext=l.yytext.trim(),62;break}},"anonymous"),rules:[/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:$)/i,/^(?:requirementDiagram\b)/i,/^(?:\{)/i,/^(?:\})/i,/^(?::)/i,/^(?:id\b)/i,/^(?:text\b)/i,/^(?:risk\b)/i,/^(?:verifyMethod\b)/i,/^(?:requirement\b)/i,/^(?:functionalRequirement\b)/i,/^(?:interfaceRequirement\b)/i,/^(?:performanceRequirement\b)/i,/^(?:physicalRequirement\b)/i,/^(?:designConstraint\b)/i,/^(?:low\b)/i,/^(?:medium\b)/i,/^(?:high\b)/i,/^(?:analysis\b)/i,/^(?:demonstration\b)/i,/^(?:inspection\b)/i,/^(?:test\b)/i,/^(?:element\b)/i,/^(?:contains\b)/i,/^(?:copies\b)/i,/^(?:derives\b)/i,/^(?:satisfies\b)/i,/^(?:verifies\b)/i,/^(?:refines\b)/i,/^(?:traces\b)/i,/^(?:type\b)/i,/^(?:docref\b)/i,/^(?:<-)/i,/^(?:->)/i,/^(?:-)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[\w][^\r\n\{\<\>\-\=]*)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},unqString:{rules:[],inclusive:!1},token:{rules:[],inclusive:!1},string:{rules:[48,49],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,50],inclusive:!0}}};return $}();se.lexer=Qe;function ee(){this.yy={}}return r(ee,"Parser"),ee.prototype=se,se.Parser=ee,new ee}();fe.parser=fe;var Ge=fe,ye=[],T={},z=new Map,L={},G=new Map,je={REQUIREMENT:"Requirement",FUNCTIONAL_REQUIREMENT:"Functional Requirement",INTERFACE_REQUIREMENT:"Interface Requirement",PERFORMANCE_REQUIREMENT:"Performance Requirement",PHYSICAL_REQUIREMENT:"Physical Requirement",DESIGN_CONSTRAINT:"Design Constraint"},Xe={LOW_RISK:"Low",MED_RISK:"Medium",HIGH_RISK:"High"},Je={VERIFY_ANALYSIS:"Analysis",VERIFY_DEMONSTRATION:"Demonstration",VERIFY_INSPECTION:"Inspection",VERIFY_TEST:"Test"},Ze={CONTAINS:"contains",COPIES:"copies",DERIVES:"derives",SATISFIES:"satisfies",VERIFIES:"verifies",REFINES:"refines",TRACES:"traces"},et=r((e,t)=>(z.has(e)||z.set(e,{name:e,type:t,id:T.id,text:T.text,risk:T.risk,verifyMethod:T.verifyMethod}),T={},z.get(e)),"addRequirement"),tt=r(()=>z,"getRequirements"),it=r(e=>{T!==void 0&&(T.id=e)},"setNewReqId"),rt=r(e=>{T!==void 0&&(T.text=e)},"setNewReqText"),nt=r(e=>{T!==void 0&&(T.risk=e)},"setNewReqRisk"),st=r(e=>{T!==void 0&&(T.verifyMethod=e)},"setNewReqVerifyMethod"),at=r(e=>(G.has(e)||(G.set(e,{name:e,type:L.type,docRef:L.docRef}),ue.info("Added new requirement: ",e)),L={},G.get(e)),"addElement"),lt=r(()=>G,"getElements"),ot=r(e=>{L!==void 0&&(L.type=e)},"setNewElementType"),ct=r(e=>{L!==void 0&&(L.docRef=e)},"setNewElementDocRef"),ht=r((e,t,c)=>{ye.push({type:e,src:t,dst:c})},"addRelationship"),ut=r(()=>ye,"getRelationships"),dt=r(()=>{ye=[],T={},z=new Map,L={},G=new Map,qe()},"clear"),pt={RequirementType:je,RiskLevel:Xe,VerifyType:Je,Relationships:Ze,getConfig:r(()=>pe().req,"getConfig"),addRequirement:et,getRequirements:tt,setNewReqId:it,setNewReqText:rt,setNewReqRisk:nt,setNewReqVerifyMethod:st,setAccTitle:Ve,getAccTitle:$e,setAccDescription:Le,getAccDescription:Oe,addElement:at,getElements:lt,setNewElementType:ot,setNewElementDocRef:ct,addRelationship:ht,getRelationships:ut,clear:dt},ft=r(e=>`

  marker {
    fill: ${e.relationColor};
    stroke: ${e.relationColor};
  }

  marker.cross {
    stroke: ${e.lineColor};
  }

  svg {
    font-family: ${e.fontFamily};
    font-size: ${e.fontSize};
  }

  .reqBox {
    fill: ${e.requirementBackground};
    fill-opacity: 1.0;
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  
  .reqTitle, .reqLabel{
    fill:  ${e.requirementTextColor};
  }
  .reqLabelBox {
    fill: ${e.relationLabelBackground};
    fill-opacity: 1.0;
  }

  .req-title-line {
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  .relationshipLine {
    stroke: ${e.relationColor};
    stroke-width: 1;
  }
  .relationshipLabel {
    fill: ${e.relationLabelColor};
  }

`,"getStyles"),gt=ft,ge={CONTAINS:"contains",ARROW:"arrow"},yt=r((e,t)=>{let c=e.append("defs").append("marker").attr("id",ge.CONTAINS+"_line_ending").attr("refX",0).attr("refY",t.line_height/2).attr("markerWidth",t.line_height).attr("markerHeight",t.line_height).attr("orient","auto").append("g");c.append("circle").attr("cx",t.line_height/2).attr("cy",t.line_height/2).attr("r",t.line_height/2).attr("fill","none"),c.append("line").attr("x1",0).attr("x2",t.line_height).attr("y1",t.line_height/2).attr("y2",t.line_height/2).attr("stroke-width",1),c.append("line").attr("y1",0).attr("y2",t.line_height).attr("x1",t.line_height/2).attr("x2",t.line_height/2).attr("stroke-width",1),e.append("defs").append("marker").attr("id",ge.ARROW+"_line_ending").attr("refX",t.line_height).attr("refY",.5*t.line_height).attr("markerWidth",t.line_height).attr("markerHeight",t.line_height).attr("orient","auto").append("path").attr("d",`M0,0
      L${t.line_height},${t.line_height/2}
      M${t.line_height},${t.line_height/2}
      L0,${t.line_height}`).attr("stroke-width",1)},"insertLineEndings"),Pe={ReqMarkers:ge,insertLineEndings:yt},y={},De=0,Ye=r((e,t)=>e.insert("rect","#"+t).attr("class","req reqBox").attr("x",0).attr("y",0).attr("width",y.rect_min_width+"px").attr("height",y.rect_min_height+"px"),"newRectNode"),Ue=r((e,t,c)=>{let d=y.rect_min_width/2,u=e.append("text").attr("class","req reqLabel reqTitle").attr("id",t).attr("x",d).attr("y",y.rect_padding).attr("dominant-baseline","hanging"),p=0;c.forEach(_=>{p==0?u.append("tspan").attr("text-anchor","middle").attr("x",y.rect_min_width/2).attr("dy",0).text(_):u.append("tspan").attr("text-anchor","middle").attr("x",y.rect_min_width/2).attr("dy",y.line_height*.75).text(_),p++});let g=1.5*y.rect_padding,h=p*y.line_height*.75,o=g+h;return e.append("line").attr("class","req-title-line").attr("x1","0").attr("x2",y.rect_min_width).attr("y1",o).attr("y2",o),{titleNode:u,y:o}},"newTitleNode"),Be=r((e,t,c,d)=>{let u=e.append("text").attr("class","req reqLabel").attr("id",t).attr("x",y.rect_padding).attr("y",d).attr("dominant-baseline","hanging"),p=0,g=30,h=[];return c.forEach(o=>{let _=o.length;for(;_>g&&p<3;){let R=o.substring(0,g);o=o.substring(g,o.length),_=o.length,h[h.length]=R,p++}if(p==3){let R=h[h.length-1];h[h.length-1]=R.substring(0,R.length-4)+"..."}else h[h.length]=o;p=0}),h.forEach(o=>{u.append("tspan").attr("x",y.rect_padding).attr("dy",y.line_height).text(o)}),u},"newBodyNode"),_t=r((e,t,c,d)=>{let u=t.node().getTotalLength(),p=t.node().getPointAtLength(u*.5),g="rel"+De;De++;let o=e.append("text").attr("class","req relationshipLabel").attr("id",g).attr("x",p.x).attr("y",p.y).attr("text-anchor","middle").attr("dominant-baseline","middle").text(d).node().getBBox();e.insert("rect","#"+g).attr("class","req reqLabelBox").attr("x",p.x-o.width/2).attr("y",p.y-o.height/2).attr("width",o.width).attr("height",o.height).attr("fill","white").attr("fill-opacity","85%")},"addEdgeLabel"),Et=r(function(e,t,c,d,u){let p=c.edge(W(t.src),W(t.dst)),g=Ce().x(function(o){return o.x}).y(function(o){return o.y}),h=e.insert("path","#"+d).attr("class","er relationshipLine").attr("d",g(p.points)).attr("fill","none");t.type==u.db.Relationships.CONTAINS?h.attr("marker-start","url("+de.getUrl(y.arrowMarkerAbsolute)+"#"+t.type+"_line_ending)"):(h.attr("stroke-dasharray","10,7"),h.attr("marker-end","url("+de.getUrl(y.arrowMarkerAbsolute)+"#"+Pe.ReqMarkers.ARROW+"_line_ending)")),_t(e,h,y,`<<${t.type}>>`)},"drawRelationshipFromLayout"),Rt=r((e,t,c)=>{e.forEach((d,u)=>{u=W(u),ue.info("Added new requirement: ",u);let p=c.append("g").attr("id",u),g="req-"+u,h=Ye(p,g),o=[],_=Ue(p,u+"_title",[`<<${d.type}>>`,`${d.name}`]);o.push(_.titleNode);let R=Be(p,u+"_body",[`Id: ${d.id}`,`Text: ${d.text}`,`Risk: ${d.risk}`,`Verification: ${d.verifyMethod}`],_.y);o.push(R);let k=h.node().getBBox();t.setNode(u,{width:k.width,height:k.height,shape:"rect",id:u})})},"drawReqs"),mt=r((e,t,c)=>{e.forEach((d,u)=>{let p=W(u),g=c.append("g").attr("id",p),h="element-"+p,o=Ye(g,h),_=[],R=Ue(g,h+"_title",["<<Element>>",`${u}`]);_.push(R.titleNode);let k=Be(g,h+"_body",[`Type: ${d.type||"Not Specified"}`,`Doc Ref: ${d.docRef||"None"}`],R.y);_.push(k);let I=o.node().getBBox();t.setNode(p,{width:I.width,height:I.height,shape:"rect",id:p})})},"drawElements"),bt=r((e,t)=>(e.forEach(function(c){let d=W(c.src),u=W(c.dst);t.setEdge(d,u,{relationship:c})}),e),"addRelationships"),kt=r(function(e,t){t.nodes().forEach(function(c){c!==void 0&&t.node(c)!==void 0&&(e.select("#"+c),e.select("#"+c).attr("transform","translate("+(t.node(c).x-t.node(c).width/2)+","+(t.node(c).y-t.node(c).height/2)+" )"))})},"adjustEntities"),W=r(e=>e.replace(/\s/g,"").replace(/\./g,"_"),"elementString"),It=r((e,t,c,d)=>{y=pe().requirement;let u=y.securityLevel,p;u==="sandbox"&&(p=ne("#i"+t));let h=(u==="sandbox"?ne(p.nodes()[0].contentDocument.body):ne("body")).select(`[id='${t}']`);Pe.insertLineEndings(h,y);let o=new Me({multigraph:!1,compound:!1,directed:!0}).setGraph({rankdir:y.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}}),_=d.db.getRequirements(),R=d.db.getElements(),k=d.db.getRelationships();Rt(_,o,h),mt(R,o,h),bt(k,o),Fe(o),kt(h,o),k.forEach(function(A){Et(h,A,o,t,d)});let I=y.rect_padding,w=h.node().getBBox(),q=w.width+I*2,v=w.height+I*2;Ae(h,v,q,y.useMaxWidth),h.attr("viewBox",`${w.x-I} ${w.y-I} ${q} ${v}`)},"draw"),St={draw:It},At={parser:Ge,db:pt,renderer:St,styles:gt};export{At as diagram};
