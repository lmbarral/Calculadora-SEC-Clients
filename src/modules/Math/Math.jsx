import SALARIOS from "./Cats";
import ADICIONALES from "./Ads";

const Math = (form) => {

    //console.log({form})

    const SALS = SALARIOS;
    const ADS = ADICIONALES;
    var sBase = 0, m = 0, agui = false, feriadosM = 0, vacacionesM = 0, adEmpresaM = 0, ACU21 = 0, ACU9 = 0, FIJA = 0, ACU21KM = 0, ACU9KM = 0, FIJAKM = 0, pBase = 0, ACU21KM100 = 0, ACU9KM100 = 0, FIJAKM100 = 0, PBASE100 = 0;
    var params = {}, neto = {};

    if(!form || form === undefined) return;
    const category = form.category;
    const month = form.month;
    const ant = form.ant;
    const jornada = form.jornada;
    const os = form.os;
    const extras50 = form.extras50;
    const extras100 = form.extras100;
    const base = form.base;
    const feriados = form.feriados;
    const vacaciones = form.vacaciones;
    const adEmpresa = form.adEmpresa;
    const km = form.km;

    const resultados = ({params}) => {

        const {sBase, ant, jornada, os, extras50, extras100, m, feriadosM, vacacionesM, category, agui, month, adEmpresaM, km, ACU21, ACU9, FIJA, ACU21KM, ACU9KM, FIJAKM, pBase, ACU21KM100, ACU9KM100, FIJAKM100, PBASE100} = params || 0;

        var AUM = 0, ANT = 0, JOR = 0, JUB = 0, DOS = 0, L19032 = 0, ART0 = 0, AGUI = 0, FAECYS = 0, EX50 = 0, EX100 = 0, TOTAL = 0, SUM = 0, RES = 0, PRES = 0, FER = 0, VAC = 0, NDOS = 0, NFAECYS = 0, NART0 = 0, NRES = 0, RACU21 = 0, RACU9 = 0, RFIJA = 0, RACU21KM = 0, RACU9KM = 0, RFIJAKM = 0, RKM = 0, RACU21KM100 = 0, RFIJAKM100 = 0, RACU9KM100 = 0, BASEKM = 0, TUR = 0, KMM100 = 0, KMP100 = 0;

        /*INICIO HABERES*/
        /*REMUNERATIVO*/
        if(Number(category) > 70 && Number(category) < 100) JOR = sBase * (Number(jornada)/36); else JOR = sBase * (Number(jornada)/48);
        FER = (JOR/25) * feriadosM;
        if(ant === "0") ANT = ""; else ANT = JOR * Number(ant);
        VAC = ((JOR/25) - (JOR/30)) * vacacionesM;
        PRES = (JOR + ANT) * 0.08333;
        EX50 = ((JOR + PRES)/192)*1.5*Number(extras50);
        EX100 = ((JOR + PRES)/192)*2*Number(extras100);
        /*REMUNERATIVO TURISMO*/
        RACU21 = JOR * Number(ACU21);
        RFIJA = Number(FIJA);
        RACU9 = (JOR + RACU21 + FIJA) * Number(ACU9);
        if(Number(km) <= 100) {
            RACU21KM = Number(pBase) * Number(ACU21KM) * Number(km);
            RFIJAKM = Number(FIJAKM) * Number(km);
            RACU9KM = Number(pBase) * Number(ACU9KM) * Number(km);
            BASEKM = Number(km) * Number(pBase);
            KMM100 = Number(km);
        };
        if(Number(km) > 100) {
            BASEKM = (Number(pBase) * 100) + (Number(PBASE100) * (Number(km) - 100));
            RACU21KM = Number(pBase) * Number(ACU21KM) * 100;
            RFIJAKM = Number(FIJAKM) * 100;
            RACU9KM = Number(pBase) * Number(ACU9KM) * 100;
            RACU21KM100 = Number(PBASE100) * Number(ACU21KM100) * (Number(km) - 100);
            RFIJAKM100 = Number(FIJAKM100) * ((Number(km) - 100));
            RACU9KM100 = Number(PBASE100) * Number(ACU9KM100) * (Number(km) - 100);
            KMM100 = 100;
            KMP100 = Number(km) - 100;
        }
        RKM = RACU21KM + RACU9KM + RFIJAKM + RACU21KM100 + RFIJAKM100 + RACU9KM100; 
        /*TOTALES PARCIALES*/
        SUM = JOR + FER + ANT + VAC + PRES + EX50 + EX100 + Number(adEmpresaM);
        if(agui === false) AGUI = 0; else AGUI = SUM/2;
        /*NO REMUNERATIVO*/
        AUM = JOR * m;
        TUR = RACU21 + RFIJA + RACU9 + Number(RKM);
        /*FIN HABERES*/

        /*INICIO DEDUCCIONES*/
        /*REMUNERATIVAS*/
        JUB = (SUM + AGUI) * 0.11;
        L19032 = (SUM + AGUI) * 0.03;
        DOS = (SUM + AGUI) * os;
        const OSECAC = 100;
        ART0 = (SUM + AGUI) * 0.02;
        FAECYS /*(ART1)*/ = (SUM + AGUI) * 0.005;
        RES = JUB + L19032 + DOS + OSECAC + ART0 + FAECYS;
        /*NO REMUNERATIVAS*/
        NDOS = AUM * os;
        NART0 = AUM * 0.02;
        NFAECYS = AUM *0.005;
        NRES = NDOS + NART0 + NFAECYS
        /*FIN DEDUCCIONES*/
        
        /*TOTAL*/
        TOTAL = SUM + AGUI + AUM + TUR - RES - NRES;

        return {AUM, ANT, JOR, JUB, DOS, OSECAC, L19032, ART0, AGUI, FAECYS, EX50, EX100, TOTAL, SUM, RES, PRES, FER, VAC, NDOS, NFAECYS, NART0, NRES, ant, jornada, os, extras50, extras100, m, feriadosM, vacacionesM, category, agui, month, adEmpresaM, ACU21, ACU9, FIJA, ACU21KM, ACU9KM, FIJAKM, pBase, RACU21, RFIJA, RACU9, RACU21KM, RFIJAKM, RACU9KM, RKM, km, BASEKM, TUR, ACU21KM100, FIJAKM100, ACU9KM100, RACU21KM100, RFIJAKM100, RACU9KM100, KMM100, KMP100};
    }

    if(!Number(base)){ sBase = SALS[category][month].salarioBase} else { sBase = Number(base)};
    m = SALS[category][month].mes;
    if(SALS[category][month].sac === true || form.AG === true) agui = true; else agui = false;
    if(feriados === "Elegí una opción") feriadosM = 0; else feriadosM = feriados;
    if(vacaciones === "Elegí una opción") vacacionesM = 0; else vacacionesM = vacaciones;
    if(adEmpresa === "") adEmpresaM = false; else adEmpresaM = adEmpresa;
    //LÓGICA TURISMO
    ACU21 = SALS[category][month].acu21 || 0;
    ACU9 = SALS[category][month].acu9 || 0;
    FIJA = SALS[category][month].fija || 0;
    if(category === "124" || category === "125") {
        //DESARROLLAR LÓGICA PARA m100 y p100
        ACU21KM = ADS[category]["m100"][month].acu21;
        ACU9KM = ADS[category]["m100"][month].acu9;
        FIJAKM = ADS[category]["m100"][month].fija;
        pBase = ADS[category]["m100"][month].pBase;
        ACU21KM100 = ADS[category]["p100"][month].acu21
        ACU9KM100 = ADS[category]["p100"][month].acu9
        FIJAKM100 = ADS[category]["p100"][month].fija
        PBASE100 = ADS[category]["p100"][month].pBase
    }
    params = {category, sBase, ant, jornada, os, extras50, extras100, m, feriadosM, vacacionesM, agui, month, adEmpresaM, km, ACU21, ACU9, FIJA, ACU21KM, ACU9KM, FIJAKM, pBase, ACU21KM100, ACU9KM100, FIJAKM100, PBASE100}
    if(!params || params === undefined) return;
    neto = resultados({params});
    if(!neto || neto === undefined) return;
    //console.log(neto)
    return neto;
}

export default Math;