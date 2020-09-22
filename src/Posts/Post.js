 import React, { Component } from 'react'
 import hilux from "./hilux.jpg"
 import proace from"./proace.jpg"
 import chr from"./chr.jpg"
 import "./post.css"
 import{Post1,HiluxP,ProaceP,ChrP} from"./postStyle.js"

export default class Post extends Component {
    render() {
        return (
            
                <Post1 >
                    <img src={hilux}alt="hilux"className="hilux"/>
                   <HiluxP>Новий<span> Toyota Hilux</span> поєднує яскравий дизайн, потужний 2,8-літровий силовий агрегат і покращені експлуатаційні характеристики під час подорожей містом та бездоріжжям. Окрім того, він став ще комфортнішим та привабливішим. З моменту запуску у 1968 році Toyota Hilux неодноразово доводив свою невгамовність, підкорюючи Північний полюс, вулкани Ісландії, Антарктику і здобувши перемогу у ралі Дакар-2019.
                          Фронтальна частина нового Toyota Hilux повністю видозмінена завдяки сміливій 3D-решітці та оновленому дизайну переднього бампера, які підкреслюють виразність пікапу на дорозі, його надійність, міцність і підвищену прохідність.  
                   </HiluxP>
                       <img src={proace}alt="proace"className="proace"/>
                    <ProaceP> <span>Toyota Proace Verso</span>
                     Створено для тих, хто веде активний спосіб життя. Цей багатофункціональний автомобіль якнайкраще підійде і для сімейних подорожей, і для власників бізнесу.
                     Proace Verso буде доступний у двох довжинах кузова (4 959 мм та 5 309 мм). Залежно від обраної модифікації, у салоні автомобіля зможуть комфортно розміститися 7, 8 або 9 осіб; будуть доступні сидіння, які складаються та посуваються одним рухом; бокові дверцята, що відчиняються безконтактним способом; складані столики, що дарують зручність, від якої неможливо відмовитися. Передні сидіння з масажем та підігрівом перетворять поїздку на подорож преміум-класу, а такі допоміжні системи, як система контролю сліпих зон Blind Spot Monitor, проєкційний екран Head-up Display та система безключового доступу та запуску авто Smart Entry&Start зроблять керування авто невимушеним та простим.
                     Proace Verso буде оснащено антиблокувальною системою гальм, системою допомоги при екстреному гальмуванні, електронними системами розподілу гальмівних зусиль і стабілізації, антибуксувальною системою, системою допомоги при рушанні на підйомі й інформування про низький тиск у шинах, а також круїз-контролем з обмежувачем швидкості.
                    </ProaceP>
                       <img src={chr}alt="chr"className="chr"/>
                   <ChrP>
                     <span>Toyota C-HR</span> – емоційний, елегантний, прогресивний кросовер для міста – діамант модельного ряду Toyota. Новий Toyota C-HR відтепер оснащений декількома гібридними установками на вибір та новою мультимедійною системою. Вдосконалений дизайн зробив автомобіль ще більш яскравим, спокусливим та помітним у потоці.
                     Окрім уже звичного для моделі бензинового 1,2-літрового* турбодвигуна максимальною потужністю 116 к.с.** та гібридної системи з поліпшеним 1,8-літровим* двигуном сумарною потужністю 122 к.с.**, на вибір пропонується нова гібридна система з 2-літровим* двигуном Dynamic Force сумарною потужністю 184 к.с**. Гібридні версії установок забезпечують низький рівень викидів*** вуглекислого газу та витрати пального.
                   </ChrP>
                </Post1>
        
        )
    }
}
