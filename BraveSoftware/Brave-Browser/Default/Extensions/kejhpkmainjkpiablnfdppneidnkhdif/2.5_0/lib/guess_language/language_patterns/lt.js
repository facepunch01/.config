(function () {

var module = {
    exports: null
};

// For questions about the Lithuanian hyphenation patterns
// ask Rogutės Sparnuotos (rogutes at googlemail dot com)
module.exports = {
	'id': 'lt',
	'leftmin': 2,
	'rightmin': 2,
	'patterns': {
		3 : "a1ba1ca1da1ea1fa1ha1ja1ka1la1ma1na2oa1pa1ra1sa1ta4ua1va1wa1ya1za1ąa1ęa1įa1ša1ųa1žb1jcu4d4zd4že1ce1ee1fe1ge1he1je1ke1le1me2oe3pe1re1se1te1ve1we1ye1ze1ąe1če1ęe1ėe1še1ųe1ūe1ž3gui2ai1ci1di2ei1fi1ji1ki1li1mi2oi1pi1ri2ui1vi1wi1yi1zi2ąi1či1ęi1įi1ši2ųi2ūi3ž1ju1jū3kek4i3ko3ku5ką3lą3lųm2am2one15noo1ao1bo1co1do1eo1fo1go1ho1io1jo1ko1lo1mo1no1po1ro1so1vo1wo1yo1zo1ąo1čo1ęo1ėo1įo1šo1ųo1ūo1žpa3p2ep2i3pop2yp2ėr2ar2ir2or2u3rą5rųs2esu1są35sėt2at2it2o3tęu1bu1cu1du1fu1gu1hu1ju1ku1lu1mu1nu2ou3pu1ru1su1uu1vu1wu1yu1zu1ąu1ču1ęu1įu1šu1ųu1žv2e3vą3vėy1ay1by1cy1dy1ey1fy1gy1hy1iy1jy1ky1ly1my1ny1oy1py3ry1sy1ty1uy1vy1wy1yy1zy1ąy1čy1ęy1ėy1įy1šy1ųy1ūy1žą1aą1bą1cą1dą1eą1fą1gą1hą1ią1ją1ką1lą1mą1ną1oą1pą1rą1są1tą1uą1vą1wą1yą1zą1ąą1čą1ęą1ėą1įą1šą1ųą1ūą1žę1aę1bę1cę1dę1eę1fę1gę1hę1ię1ję1kę1lę1mę1nę1oę1pę1rę1sę1tę1uę1vę1wę1yę1zę1ąę1čę1ęę1ėę1įę1šę1ųę1ūę1žė1aė1bė1cė1dė1eė1fė1gė1hė1iė1jė1kė1mė1nė1oė1pė1rė1uė1vė1wė1yė1zė1ąė1čė1ęė1ėė1įė1šė1ųė1ūė1žį1aį1bį1cį2eį1fį4gį1hį1iį1jį2lį2mį1nį1oį4pį2rį1sį1uį2vį1wį1yį1zį1ąį1čį1ęį1įį1šį1ųį1ūį1žų1aų1bų1cų1dų1eų1fų1gų1hų1ių1jų1kų1lų1mų1nų1oų1pų1rų1sų1tų1uų1vų1wų1yų1zų1ąų1čų1ęų1ėų1įų1šų1ųų1ūų1žū1aū1bū1cū1dū1eū1fū1gū1hū1iū1jū1kū1lū1mū1nū1oū1pū1rū1sū1tū1uū1vū1wū1yū1zū1ąū1čū1ęū1ėū1įū1šū1ųū1ūū1žž1jž2u",
		4 : "_ap1_at1_nu1_sk4_st4_uk3_už1_įs4a1a2a2chae2l2a1ga4grak2la3lia3lya3lėa3lūap3la3pra4rgasi1a4ska3slato1atp42a1ča1ė2a3šnaš2va1ū2až2lba3c2b1b2b1c4b3dbep42b1f2b1g2b1h2b1k2b1lb2lab2lu2b1m2b1n2b1p2b2rb3ri2b1s2b3tbu4k2b1v2b1w2b1z2b1č2b1š2b1žcar42c1b2c1c2c1d2c1f2c1g3chi2c1k2c1l2c1m2c1n2c1p2c1r2c1s2c1tcuk52c1v2c1w2c1z2c1č2c1š2c1ž2d1b2d1c2d1dde4k2d1f2d1g2d1hdi4pdi4s2d1j2d3k4d3l2d1m2d1n2d1p2d1rdro1d2rė4drų2d1s2d1tdu2adu4k2d1vd3va2d1w2d1č2d1še1a2eat1e1b2ebe1e3bleb3re2che3d2e1ie1eine3kr2e1neno1ens4enu1e3orep4rero1erė2es4ke1u4euž3e3vie1į4eįp3e3šneš2vešė32f1b2f1c2f1d2f1f2f1g2f1h2f1k2f1l2f1m2f1n2f1p2f1rfri12f1s2f1t2f1v2f1w2f1z2f1č2f1š2f1žgaš32g1b2g1c2g1d2g1f2g1g2g1h2g1k2g1lg2leg2lo2g1m2g1n3g2rg3rig4rą5grį4grų2g1s4g1t2g1v2g1w2g1z2g1č2g1š2g1ž2h1b2h1c2h1d2h1f2h1g2h1hhi4b2h1k2h2l2h1mh2me2h1n2h1p2h1r2h1s2h1t2h1v2h1w2h1z2h1č2h1š2h1žia3kiap4i3ari3b2ice1id2rie3gi3ei2i1g2i1hi1i2ik3rilo11imd4i1n5inviok2i3ori3ri4i1si5sai5siis4ki3sli1ė2i3šniš5ti4švišė21išš3ja_2j1b2j1c2j1d2j1f2j1g2j1h2j1j2j1k2j1l2j1m2j1njot32j1p2j1r2j1s2j1t2j1v2j1w2j1z2j1č2j1š2j1ž3ka_kak33kar3kas5kav2k1b2k1c2k1d2k1f2k1g2k1h5ki_5kia3kib3kil5kit2k1k2k1lk2ly4klą4klų2k1m2k1n2k1p2k2rk3rok4ryk5rą2k1sk4skks3l4k1tk3ta4kubku4k2k1vk2vak3vok2vė2k1w3kyt2k1z2k1č2k1škšė32k1ž3la_2l1blb3r2l1c2l1d3le_le3c4leč2l1f2l1g2l1h3li_li4a3lių2l1j2l1klko12l1l2l1m2l1n3lo_log44lop4l1p2l1r4l1sl4sk4l3t3lu_2lup4l1v2l1w3lyč2l1z2l1č3lęs3lėm3lės2lėč3lį44l1š2l1ž3mas2m1bmb3r2m1c2m1dme3c2m1f2m1g2m1h2m1k2m1l2m1m2m1n2mod2m1pm4plm3pr2m1r4m1s2m1tm3ta3muo2m1v2m1w2m1z2m1č2m1š2m1ž2n1b2n1c2n1dneg42n1f4n1gng3lng4r2n1hni4s2n1j2n1knk3r2n1l2n1m2n1n2n1p2n1r4n1sns3l4n1tn3tanua4nu3gnu1inuk22n1v2n1w2n1z4n1č2n1š2n1žo3dro2eto3krono1o1o2o2ręo3slo3t2oto1oš2vpad23panpap4p2arpas22p1b4p1cper12p1f2p1g2p1h3p2lp3lep3lip3lop4lup4ly2p1m4p1npo4g2p1p2p2rp3rip3ry4prąp3rėp3rū4p1spsi13p4u2p1v2p1w2p1z2p1č4p3ž3ra_ra3b3rac3ral3ram3rav2r1brbo12r1c4r1d2reb3rel5res3ret2r1f2r1g2r1h3ri_ri3d3rij2ril3riori3p3rią3rių2riū4r1k4r1l2r1m4r1n3roj3rok3ron3rop5ros2r1p2r1r4r1srs4p4r1t2ruk3rul4run2rup3rus4r1v2r1w2r1z4rąs4r1č4r1š2r1ž2s3b2s1c2s3d2s1f2s1g2s1hsi3d4sk_4ske5ski5sky4ską5skę2s2l3sles3lis3lo2s1m4smę4s3n3s2ps3pe4spn4spu4s1rs3ri2s1s2s1tst2v4stę4stųs2tūsuž42s1vs2ve2s1w2s1z4s3č2s1š2s1ž2tabta5s2tat2tač2t1b2t1c2t1d2teb3temte4o2t1f4t3g2t1h3tin2tip4t3j4t3kt4kl4t3l4t3m2t1n2tow2t3pt4pjtp4r2t1r4tro4trą4trųtsi14t1ttua43tur2t1vt2vo2t1w3tyd2t1z2t1čt2ėm2t3žu1a2u3aiu2bju1e2ug4ru5inui2ru3klu3kru3kvu5kųu3orup4lurk2u3slu3t2uto12utru1ė2uš2vu1ū2u3žluž3v3va_vap4va3t2v1b2v1c2v1d2vep3ves2v1f2v1g2v1h2v1j2v1k2v1l2v1m2v1n2v1p2v1r2v4s2v1t2v1v2v1w2v1z2v1č4vėp2v1š2v1ž2w1b2w1c2w1d2w1f2w1g2w1h2w1k2w1l2w1m2w1n2w1p2w1r2w1s2w1t2w1v2w1w2w1z2w1č2w1š2w1žy4sk2z1b2z1c2z1d2z1f2z1g2z1h2z1k2z1l2z1m2z1n2z1p2z1r2z1s2z1t2z1v2z1w2z1z2z1č2z1š2z1ž2č1b2č1c2č1d2č1f2č1g2č1hčin12č1k2č1l2č1m2č1n2č1p2č1r2č1s2č1t2č1v2č1w2č1z2č1č2č1š2č1ž2ė3lė3me2ė1sės3l2ė3tė4trį1d2į2k4įsi1įs3lįs2mįs2rįst2į2t2į1ė22š1cš1eiše2v2š1f2š1h2š1lš2lu3šly2š1m2š1nš2nešno1šo2r2š1ršsi1šu4š3š1vš2vi2š1w2š1z4š3čšė2j2š1š2š1žūs3lūs3t2ž1cžen12ž3g2ž1hžio32ž1lž2lu4ž1m2ž1n2ž3p2ž1r2ž1sžsi1ž4skžs3t3ž2vž4viž3vo2ž1w2ž1z2ž1čžįs32ž1š2ž1ž",
		5 : "_api1_ap3r_as3p_ata1_at3r_aš3v_ek3r_i2š3_iši2_sam1_u2š3a4draag3raa5groa5infai4skai4trak2via2kėta5lo1an4skan4trap3eiap3s2ari4sasi5sas3klas2mias2mua5s4na4stua4truat1ė2atū2žau4klau4skau4slaš4trba4slbe3s2besi1be3t2b2liz3b2loda3b4dema1de4prde4spdis5kdo3ridro2bdu5kadu4sldvi3adžio1e2a3leapi1ed3rie4droed3rėeg3raei4skei4slei2š14entae3o2šep4liepra1epri1eri4sesi5seska1e5skoe3s2veįs3keįt3rfi4s5ge4o13g2nų2g1p2grai2g3ran5g3reg4reig3ro_gyva1ia5g4i3aišid3rėi2dėmie3kli3entie4ski3g2lig3rui3k2nin4klio4pli2p1jip3ruis4lii5s4ni4steisto12i3t2jo4tv5ka3dka4klka4pr3katika3z2ke4b33k2lak4lan4kle_k2lel4klo_4klu_k4raukris2k4rov4k3ru5krunk4s3pku4prkš2lyle4gr5li4olpna1l4s3pmeis1mi4glmi4grmin4smi4trna3s2na3t2ncen1n3drėnei2mne4o3neor2nerė3nesi1ne3slne3t2nk3lan3kryns4kun4s3pnst3rnt4pln3trunu3b2nu4o3nuos2nu5s4olen1om4pro2rieori4sor4tros3leos4loo3s2vpai2lpai2mpai2rpa5srp2at24p3d2pe2reper3spe2rėp3ieš2p3k24pliop4liup4lojpoli1p3raip3rašpris2p5ro_p3romp5s4kp3s2v4p3t2pu4skpu4slpu4tr4p3š2ra1imra3krras4lra3smr3b4r4rein4reitre4p5res3lri3krrisi1ri3strk3lyr3k4r3rod2ro4grr3p4rr3t2rr3t2v3ruosru4sk4rutor3š2lr3š2msala1san5tse4krsi3k4si3p4si3s23s2k2s5ka_5sk4r5skubsk3vask3vi4s3lu4s3lū4sme_so4drs2tals2ten4stins2tods2toj4s3tėsu3blsu3d2su3g2suk2lsu3s2susi13s2vyta3krte3t2ti4gr3toje2tolįto3s2tp3lū4triot2riš4t3s44tvėjt3ėmut3ėmęt3ėmė2t3š2u1i2muk2leuo4slup3rour3klu5ro1ur3s2us3laus3leusva1us3veu3š2lu3š2nuži2muž1ė2ygia1y4k3lčeko1ė4k3l2š1b22š3d22š1g4šiuk12š1k2š2lij2š1p42š3s44š3t2š4vydū4k3lū4s3kžant42ž3b22ž3d22ž3f4ži3mu2ž3k2ž4s5l4ž3t2žu3s2",
		6 : "_arbi1_arti1_dina1_nusi1_pie2č_sida1_su5kr_te3s2_šven1a5grioan3k2lap1a4kap3i2mar1eitat3augat3i2mau4t3rbalta1ei4k3l2eis3tema5s4en3k2lenk4laere3a44g4rioi3antęi3antėie4d3rie4p5rio4g3rira3s2jauna1kavar1keren1kri5stlg3s2t2m3aidmas3kine3s2tneįs3tnt2ruoparsi1p4s3tyrai4tįri2ma_2r3imtrivin12r3orgrs4ko_rti5k4rti3s22s1amžsarka1senat4si3auksi3a2vsi3a2šsi5š2v5s4ken5s4kle3s2tovst2raitaura1ti4k3ltskri1ug5riou2s1alvi4s5kvi4t3r2vydau2š5istžants5",
		7 : "_kirti1ate5isteist2rapa4r1ė2pe2r3imprau2sipusiau1rau4ka_viesia1šsikap1",
		8 : "lap4s3to"
	}
};
var h = new window['Hypher'](module.exports);

if (typeof module.exports.id === 'string') {
    module.exports.id = [module.exports.id];
}

for (var i = 0; i < module.exports.id.length; i += 1) {
  window['Hypher']['languages'][module.exports.id[i]] = h;
}
}());
