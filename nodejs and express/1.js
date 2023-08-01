<script>

        // JavaScript program to print all
        // paths from a source to
        // destination.
        
        let v;
        
        let adjList;
        
        // A directed graph using
        // adjacency list representation
        function Graph(vertices)
        {
            // initialise vertex count
                v = vertices;
        
                // initialise adjacency list
                initAdjList();
        }
        
        // utility method to initialise
            // adjacency list
        function initAdjList()
        {
            adjList = new Array(v);
        
                for (let i = 0; i < v; i++) {
                    adjList[i] = [];
                }
        }
        
        // add edge from u to v
        function addEdge(u,v)
        {
            // Add v to u's list.
                adjList[u].push(v);
        }
        
        // Prints all paths from
            // 's' to 'd'
        function printAllPaths(s,d)
        {
            let isVisited = new Array(v);
            for(let i=0;i<v;i++)
                isVisited[i]=false;
                let pathList = [];
        
                // add source to path[]
                pathList.push(s);
        
                // Call recursive utility
                printAllPathsUtil(s, d, isVisited, pathList);
        }
        
        // A recursive function to print
            // all paths from 'u' to 'd'.
            // isVisited[] keeps track of
            // vertices in current path.
            // localPathList<> stores actual
            // vertices in the current path
        function printAllPathsUtil(u,d,isVisited,localPathList)
        {
            if (u == (d)) {
                    document.write(localPathList+"<br>");
                    // if match found then no need to
                    // traverse more till depth
                    return;
                }
        
                // Mark the current node
                isVisited[u] = true;
        
                // Recur for all the vertices
                // adjacent to current vertex
                for (let i=0;i< adjList[u].length;i++) {
                    if (!isVisited[adjList[u][i]]) {
                        // store current node
                        // in path[]
                        localPathList.push(adjList[u][i]);
                        printAllPathsUtil(adjList[u][i], d,
                        isVisited, localPathList);
        
                        // remove current node
                        // in path[]
                        localPathList.splice(localPathList.indexOf
                        (adjList[u][i]),1);
                    }
                }
        
                // Mark the current node
                isVisited[u] = false;
        }
        
        // Driver program
        // Create a sample graph
        Graph(4);
        addEdge(0, 1);
        addEdge(0, 2);
        addEdge(0, 3);
        addEdge(2, 0);
        addEdge(2, 1);
        addEdge(1, 3);
        
        // arbitrary source
        let s = 2;
        
        // arbitrary destination
        let d = 3;
        
        document.write(
        "Following are all different paths from "
        + s + " to " + d+"<Br>");
        printAllPaths(s, d);
            

        
        // This 
        g.addEdge('Agartala','Aizawl',342);
graph.addEdge('Aizawl','Imphal',400);
graph.addEdge('Amaravathi','Bangalore',663);
graph.addEdge('Amaravathi','Chennai',448);
graph.addEdge('Amaravathi','Bhubaneswar',819);
graph.addEdge('Amaravathi','Raipur',758);
graph.addEdge('Bangalore','Panaji',578);
g.addEdge('Bangalore','Chennai',333);
g.addEdge('Bangalore','Thiruvanathapuram',730)
g.addEdge('Bangalore','Mumbai',980);
g.addEdge('Bhopal','Gandhinagar',599);
g.addEdge('Bhubaneswar','Raipur',544);
g.addEdge('Bhubaneswar','Ranchi',455);
g.addEdge('Bhubaneswar','Kolkata',441);
g.addEdge('Chandigarh','Lucknow',742);
g.addEdge('Chandigarh','Jaipur',528);
g.addEdge('Chennai','Thiruvanathapuram',771);
g.addEdge('Dehradun','Lucknow',552);
g.addEdge('Dispur','Shillong',91);
g.addEdge('Dispur','Imphal',482);
g.addEdge('Dispur','Aizawl',462);
g.addEdge('Dispur','Agartala',536);
g.addEdge('Dispur','Itanagar',323);
g.addEdge('Dispur','Kohima',350);
g.addEdge('Hyderabad','Amaravati',271);
g.addEdge('Hyderabad','Bangalore',569);
g.addEdge('Hyderabad','Raipur',783);
g.addEdge('Hyderabad','Mumbai',719);
g.addEdge('Imphal','Kohima',136);
g.addEdge('Jaipur','Gandhinagar',634);
g.addEdge('Jaipur','Bhopal',598);
g.addEdge('Kohima','Itanagar',323);
g.addEdge('Kolkata','Ranchi',395);
g.addEdge('Kolkata','Patna',583);
g.addEdge('Kolkata','Gangtok',675);
g.addEdge('Kolkata','Dispur',1035);
g.addEdge('Lucknow','Jaipur',574);
g.addEdge('Lucknow','Bhopal',615);
g.addEdge('Lucknow','Ranchi',710);
g.addEdge('Lucknow','Patna',539);
g.addEdge('Mumbai','Panaji',542);
g.addEdge('Mumbai','Gandhinagar',553);
g.addEdge('Mumbai','Bhopal',776);
g.addEdge('Patna','Ranchi',327);
g.addEdge('Raipur','Mumbai',1091);
g.addEdge('Raipur','Bhopal',614);
g.addEdge('Raipur','Lucknow',810);
g.addEdge('Raipur','Ranchi',580);
g.addEdge('Shimla ','Chandigarh',113);
g.addEdge('Shimla ','Dehradun',227);
g.addEdge('Shimla ','Lucknow',841);
g.addEdge('Srinagar','Shimla',620);
g.addEdge('Srinagar','Chandigarh',562);
        
        </script>