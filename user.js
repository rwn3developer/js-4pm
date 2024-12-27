var age = [18, 20, 21];
var tbl = `
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="frow">
                            <td>1</td>
                            <td>Jay</td>
                            <td>Jay@gmail.com</td>
                            <td>${age[0]}</td>
                            <td>
                                <img src="https://themeisle.com/blog/wp-content/uploads/2024/06/Online-Image-Optimizer-Test-Image-JPG-Version.jpeg" width="100"/>
                            </td>

                        </tr>
                         <tr>
                            <td>2</td>
                            <td>aJay</td>
                            <td>aJay@gmail.com</td>
                            <td>${age[1]}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Vjay</td>
                            <td>VJay@gmail.com</td>
                            <td>${age[2]}</td>
                        </tr>
                    </tbody>
                `


document.getElementById("record").innerHTML = tbl;


var t = ["reading", "Writing", "Plying"]
var todoList = `
                <li>${t[0]}</li>
                <li>${t[1]}</li>
                <li>${t[2]}</li>
                
            `
document.getElementById('todo').innerHTML = todoList