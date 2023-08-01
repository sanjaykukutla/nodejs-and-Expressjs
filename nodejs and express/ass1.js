const csv = `Agartala,Aizawl,342
Aizawl,Imphal,400
Amaravathi,Bangalore,663
Amaravathi,Chennai,448
Amaravathi,Bhubaneswar,819
Amaravathi,Raipur,758
Bangalore,Panaji,578
Bangalore,Chennai,333
Bangalore,Thiruvanathapuram,730
Bangalore,Mumbai,980
Bhopal,Gandhinagar,599
Bhubaneswar,Raipur,544
Bhubaneswar,Ranchi,455
Bhubaneswar,Kolkata,441
Chandigarh,Lucknow,742
Chandigarh,Jaipur,528
Chennai,Thiruvanathapuram,771
Dehradun,Lucknow,552
Dispur,Shillong,91
Dispur,Imphal,482
Dispur,Aizawl,462
Dispur,Agartala,536
Dispur,Itanagar,323
Dispur,Kohima,350
Hyderabad,Amaravati,271
Hyderabad,Bangalore,569
Hyderabad,Raipur,783
Hyderabad,Mumbai,719
Imphal,Kohima,136
Jaipur,Gandhinagar,634
Jaipur,Bhopal,598
Kohima,Itanagar,323
Kolkata,Ranchi,395
Kolkata,Patna,583
Kolkata,Gangtok,675
Kolkata,Dispur,1035
Lucknow,Jaipur,574
Lucknow,Bhopal,615
Lucknow,Ranchi,710
Lucknow,Patna,539
Mumbai,Panaji,542
Mumbai,Gandhinagar,553
Mumbai,Bhopal,776
Patna,Ranchi,327
Raipur,Mumbai,1091
Raipur,Bhopal,614
Raipur,Lucknow,810
Raipur,Ranchi,580
Shimla ,Chandigarh,113
Shimla ,Dehradun,227
Shimla ,Lucknow,841
Srinagar,Shimla,620
Srinagar,Chandigarh,562`

const toks = csv.split("\n")

function processTok(tok){
    let [s,d,k] = tok.split(',')
    return {
        source: s,
        dest: d,
        dist: k
    }
}

const result = csv.split("\n").map(processTok)

console.log(result)

function findNeighbors(){
    const disp = document.getElementById("ans").value
    let city = document.getElementById("Source").value
    let res=disp+">";
    const neighbors = result.filter(x => x.source == city || x.dest == city)
    for(let i = 0; i < neighbors.length;i++){
        res +=neighbors[i].dest +" "
    }
    res+=city
    disp.innerHTML = res;
}
function findNeighborsdest(city){
    const neighbours = result.filter(x => x.source == city )
    return neighbours
}

function short(neighbours,city){
    let min = Math.min(neighbours.map(x=>x.dist))
    const short = result.filter(x => x.dist===min|| x.source == city )
    return short
}
// function path(city,dest){
//     while()
// }

console.log(findNeighbors('Hyderabad'))
console.log(findNeighborsdest('Hyderabad'))
console.log(short(findNeighborsdest('Hyderabad'),'Hyderabad'))
let source = document.getElementById("Source")
let dest = document.getElementById("Destination")
let ans = findNeighborsdest('Hyderabad')
let t = document.getElementById("ans")
t.innerHTML = ans