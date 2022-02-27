function Shinedata(){

   this.getp = function(clear){
     if(clear>=32*8-1) return 0.20
     if(clear>=32*7) return 0.16
     if(clear>=32*6) return 0.13
     if(clear>=32*5) return 0.10
     if(clear>=32*4) return 0.07
     if(clear>=32*3) return 0.04
     if(clear>=32*2) return 0.02
     return 0

   }

   this.getbp = function(clear){
     if(clear>=32*8-1) return 0.010
     if(clear>=32*7) return 0.008
     if(clear>=32*6) return 0.006
     if(clear>=32*5) return 0.005
     if(clear>=32*4) return 0.004
     if(clear>=32*3) return 0.003
     if(clear>=32*2) return 0.002
     if(clear>=32*1) return 0.001
     return 0
   }

   this.getmaxshine = function(clear){
     if(clear>=32*8-1) return 10000000
     if(clear>=32*7) return 3000000
     if(clear>=32*6) return 1000000
     if(clear>=32*5) return 700000
     if(clear>=32*4) return 400000
     if(clear>=32*3) return 200000
     if(clear>=32*2) return 100000
     return 0
   }

   this.getmaxbr = function(clear){
     if(clear>=32*8-1) return 10000
     if(clear>=32*7) return 6000
     if(clear>=32*6) return 3500
     if(clear>=32*5) return 2000
     if(clear>=32*4) return 1200
     if(clear>=32*3) return 700
     if(clear>=32*2) return 300
     if(clear>=32*1) return 100
     return 0
   }

   this.shineshopcost = [
     50000,
     100000,
     100000,
     300000,
     300000
   ]

   this.rankrewardtext = [
     "register mode pattern",
     "register effect pattern 1",
     "register effect pattern 2",
     "register greater effect pattern 1",
     "register greater effect pattern 2",
   ]

}