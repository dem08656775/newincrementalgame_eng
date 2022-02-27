function Chipdata(){



  this.getcl = function(mny){
    if(mny.greaterThanOrEqualTo("1e200")) return 13
    if(mny.greaterThanOrEqualTo("1e190")) return 12
    if(mny.greaterThanOrEqualTo("1e180")) return 11
    if(mny.greaterThanOrEqualTo("1e170")) return 10
    if(mny.greaterThanOrEqualTo("1e160")) return 9
    if(mny.greaterThanOrEqualTo("1e150")) return 8
    if(mny.greaterThanOrEqualTo("1e140")) return 7
    if(mny.greaterThanOrEqualTo("1e130")) return 6
    if(mny.greaterThanOrEqualTo("1e120")) return 5
    if(mny.greaterThanOrEqualTo("1e110")) return 4
    if(mny.greaterThanOrEqualTo("1e100")) return 3
    if(mny.greaterThanOrEqualTo("1e90")) return 2
    if(mny.greaterThanOrEqualTo("1e80")) return 1
    return 0
  }

  this.ptable = [
    [1.01,1.01,1.01,1.01,1.01],
    [0.85,1.01,1.01,1.01,1.01],
    [0.65,1.01,1.01,1.01,1.01],
    [0.40,1.01,1.01,1.01,1.01],
    [0.30,1.01,1.01,1.01,1.01],
    [0.20,0.95,1.01,1.01,1.01],
    [0.05,0.80,1.01,1.01,1.01],
    [0.00,0.65,1.01,1.01,1.01],
    [0.00,0.55,1.01,1.01,1.01],
    [0.00,0.45,0.95,1.01,1.01],
    [0.00,0.25,0.85,1.01,1.01],
    [0.00,0.15,0.60,1.01,1.01],
    [0.00,0.10,0.40,1.01,1.01],
    [0.00,0.00,0.20,0.95,1.01],
  ]

  this.getchipid = function(lv){
    let d = Math.random()
    for(let i=0;i<5;i++){
      if(this.ptable[lv][i]>d){
        return i-1
      }
    }
  }

  this.chipname = [
    "bronze",
    "silver",
    "gold",
    "platinum"
  ]

  this.chipbonusname =[
    "generator profuction",
    "generator 1 production ",
    "generator 2 production ",
    "generator 3 production ",
    "generator 4 production ",
    "generator 5 production ",
    "generator 6 production ",
    "generator 7 production ",
    "generator 8 production ",
    "tickspeed",
    "accelerator 1 production ",
    "accelerator 2 production ",
    "accelerator 3 production ",
    "accelerator 4 production ",
    "accelerator 5 production ",
    "accelerator 6 production ",
    "accelerator 7 production ",
    "accelerator 8 production ",
    "level gain",
    "leveleffect",
    "level prestige gain",
    "level prestigeeffect(coming soon...)",
    "rank gain",
    "rankeffect",
    "rank prestige gain",
    "rank prestigeeffect(coming soon...)",
    "level benefit 1effect",
    "level benefit 2effect",
    "level benefit 3effect",
    "level benefit 5effect",
    "shine gain probability",
    "shine effect(coming soon...)",
    "darkgenerator 1 effect",
    "darkgenerator 2 effect",
    "darkgenerator 3 effect",
    "darkgenerator 4 effect",
    "darkgenerator 5 effect",
    "darkgenerator 6 effect",
    "darkgenerator 7 effect",
    "darkgenerator 8 effect",
    "darkpoint effect",
    "darkgenerator 1 production",
    "darkgenerator 2 production",
    "darkgenerator 3 production",
    "darkgenerator 4 production",
    "darkgenerator 5 production",
    "darkgenerator 6 production",
    "darkgenerator 7 production",
    "darkgenerator 8 production",
    "brightness gain probability",
    "brightness effect (coming soon...)",
    "brightness effect for darks (coming soon...)",





  ]





}
