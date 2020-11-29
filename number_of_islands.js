/**
 * @param {character[][]} grid
 * @return {number}
 */
class UnionFind {
    constructor(grid) {
        let m=grid.length;
        let n=grid[0].length;
        
        this.father = new Array(m*n);
        this.count = 0;
        for(let i=0; i<m; i++) {
            for(let j=0; j<n; j++) {
                if(grid[i][j] === "1") {
                    const id = i*n + j;
                    this.father[id] = id;
                    this.count++;
                }
            }
        }
    }
    
    union(n1, n2) {
        let f1 = this.find(n1);
        let f2 = this.find(n2);
        
        if(f1 !== f2) {
            this.father[f2] = f1;
            this.count--;
        }
    }
    
    find(node) {
        if(this.father[node] === node)
            return node;
        
        this.father[node] = this.find(this.father[node]);
        
        return this.father[node];
    }
}


var numIslands = function(grid) {
    if(!grid || grid.lenght === 0 || grid[0].length === 0) {
        return 0;
    }
    
    const row = grid.length;
    const col = grid[0].length;
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    let uf = new UnionFind(grid);
    
    for(let i=0; i<row; i++) {
        for(let j=0; j<col; j++) {
            if(grid[i][j] === "1") {
                for(const d of dir) {
                    const x = i+d[0];
                    const y = j+d[1];
                    
                    if(x>=0 && x<row && y>=0 && y<col && grid[x][y] === "1") {
                        const id1 = i*col + j;
                        const id2 = x*col + y;
                        
                        uf.union(id1, id2);
                    }
                }
            }
        }
    }
    
    return uf.count;
};