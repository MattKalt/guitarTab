s= 120 / (48000*60/2**14), //BPM at 48k

r=(x,y,z)=>x.replaceAll(y,z),

T=(tuning, tab)=>(
	N=r(tab,"|",""),
	n=N.substr(2*(t*s>>13)%N.length,2),
	n=="---"?0:t/18.2*2**((parseInt(r(n,"-",""))+tuning)/12)&31
),


T(24,"--------|--------|--------|--------") +
T(19,"--------|--------|--------|--------") +
T(15,"--------|--------|--------|--------") +
T(10,"--------|--------|--------|--------") +
T( 5,"----4---|5---4---|2-0---0-|2-0-----") +
T( 0,"2-2---2-|--2---2-|----4---|----4-0-")
