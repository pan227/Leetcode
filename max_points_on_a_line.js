var maxPoints = function(points) {
    if (points.length<=2) return points.length
    var res=2, n=points.length
    for(var i=0;i<n-1;i++) {
      var m={_:0}, dup=1, r // KEY avoid when map = {}, the max value is -Infinity
      for(var j=i+1;j<n;j++) {
        var [[x1, y1], [x2, y2]]=[points[i], points[j]]
        if (x1===x2 && y1===y2) dup++ // KEY
        else {
          var k=(x1-x2)/(y1-y2)
          if (k===-Infinity) k=Infinity // KEY
          m[k]=m[k]?m[k]+1:1
        }
      }
      r=Math.max(...Object.values(m))+dup
      res=Math.max(res, r)
    }
    return res
  };