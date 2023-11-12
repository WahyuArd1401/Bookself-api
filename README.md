# REST API documentation

Bookself-API is a project that implements REST APIs to perform CRUD(Create, Read, Update, and Delete) processes using Node.js

## Install

    npm install

## Run the app

    npm run start-dev

<br/>
<br/>

# REST API

The REST API is described below.

## Add Book With Complete Data

### Request

`POST /books`

```json
POST /books HTTP/1.1
Host: localhost:9000
Content-Length: 226
{
    "name": "Buku A",
    "year": 2010,
    "author": "John Doe",
    "summary": "Lorem ipsum dolor sit amet",
    "publisher": "Dicoding Indonesia",
    "pageCount": 100,
    "readPage": 100,
    "reading": false
}
```

### Response

```json
{
    "status": "success",
    "message": "Buku berhasil ditambahkan",
    "data": {
        "bookId": "2CSYCw8pKzZ9Eqt0"
    }
}
```   

## Add Book With Finished Reading

`POST /books`

### Request

```json
POST /books HTTP/1.1
Host: localhost:9000
Content-Length: 226

{
    "name": "Buku A",
    "year": 2010,
    "author": "John Doe",
    "summary": "Lorem ipsum dolor sit amet",
    "publisher": "Dicoding Indonesia",
    "pageCount": 100,
    "readPage": 100,
    "reading": false
}
```

### Response

```json
{
    "status": "success",
    "message": "Buku berhasil ditambahkan",
    "data": {
        "bookId": "x8d0LU08LQHc5dya"
    }
}
```

## Add Book Without Name

`POST /books`

### Request
```json
POST /books HTTP/1.1
Host: localhost:9000
Content-Length: 202

{
    "year": 2010,
    "author": "John Doe",
    "summary": "Lorem ipsum dolor sit amet",
    "publisher": "Dicoding Indonesia",
    "pageCount": 100,
    "readPage": 25,
    "reading": false
}
```
### Response
```json
{
    "status": "fail",
    "message": "Gagal menambahkan buku. Mohon isi nama buku"
}
```

## Add Book with Page Read More Than Page Count

`POST /books`

### Request
```json
POST /books HTTP/1.1
Host: localhost:9000
Content-Length: 224

{
    "name": "Buku A",
    "year": 2010,
    "author": "John Doe",
    "summary": "Lorem ipsum dolor sit amet",
    "publisher": "Dicoding Indonesia",
    "pageCount": 80,
    "readPage": 90,
    "reading": false
}
```
### Response
```json
{
    "status": "fail",
    "message": "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
}
```

## Get All Books

`GET /books`

### Request
```json
GET /books HTTP/1.1
Host: localhost:9000
```
### Response
```json
{
    "status": "success",
    "data": {
        "books": [
            {
                "id": "OkmiynfwBEXYuSa3",
                "name": "Buku A",
                "publisher": "Dicoding Indonesia"
            },
            {
                "id": "x8d0LU08LQHc5dya",
                "name": "Buku A",
                "publisher": "Dicoding Indonesia"
            }
        ]
    }
}
```

## Get Detail Books With Correct Id

`POST /books/{{bookId}}`

### Request
```json
GET /books/ HTTP/1.1
Host: localhost:9000
```
### Response
```json
{
    "status": "success",
    "data": {
        "book": {
            "id": "OkmiynfwBEXYuSa3",
            "name": "Buku A",
            "year": 2010,
            "author": "John Doe",
            "summary": "Lorem ipsum dolor sit amet",
            "publisher": "Dicoding Indonesia",
            "pageCount": 100,
            "readPage": 25,
            "finished": false,
            "reading": false,
            "insertedAt": "2023-11-12T05:09:40.399Z",
            "updatedAt": "2023-11-12T05:09:40.399Z"
        }
    }
}
```

## Get Detail Finished Book

`GET /books/{{bookIdWithFinishedReading}}`

### Request
```json
GET /books/ HTTP/1.1
Host: localhost:9000
```
### Response
```json
{
    "status": "success",
    "data": {
        "book": {
            "id": "x8d0LU08LQHc5dya",
            "name": "Buku A",
            "year": 2010,
            "author": "John Doe",
            "summary": "Lorem ipsum dolor sit amet",
            "publisher": "Dicoding Indonesia",
            "pageCount": 100,
            "readPage": 100,
            "finished": true,
            "reading": false,
            "insertedAt": "2023-11-12T05:12:05.858Z",
            "updatedAt": "2023-11-12T05:12:05.858Z"
        }
    }
}
```

## Get Detail Books With Invalid Id

`GET /books/xxxxx`

### Request
```json
GET /books/xxxxx HTTP/1.1
Host: localhost:9000
```
### Response
```json
{
    "status": "fail",
    "message": "Buku tidak ditemukan"
}
```

## Update Book With Complete Data

`PUT /books/{{bookId}}`

### Request
```json
PUT /books/ HTTP/1.1
Host: localhost:9000
Content-Length: 219

{
    "name": "Buku A Revisi",
    "year": 2011,
    "author": "Jane Doe",
    "summary": "Lorem Dolor sit Ametttt",
    "publisher": "Dicoding",
    "pageCount": 200,
    "readPage": 26,
    "reading": false
}
```
### Response
```json
{
    "status": "success",
    "message": "Buku berhasil diperbarui"
}
```

## Update Book Without Name

`PUT /books/{{bookId}}`

### Request
```json
PUT /books/ HTTP/1.1
Host: localhost:9000
Content-Length: 189

{
    "year": 2011,
    "author": "Jane Doe",
    "summary": "Lorem Dolor sit Ametttt",
    "publisher": "Dicoding",
    "pageCount": 200,
    "readPage": 26,
    "reading": false
}
```
### Response
```json
{
    "status": "fail",
    "message": "Gagal memperbarui buku. Mohon isi nama buku"
}
```

## Update Book With Page Read More Than Page Count

`PUT /books/{{bookId}}`

### Request
```json
PUT /books/ HTTP/1.1
Host: localhost:9000
Content-Length: 218

{
    "name": "Buku A Revisi",
    "year": 2011,
    "author": "Jane Doe",
    "summary": "Lorem Dolor sit Ametttt",
    "publisher": "Dicoding",
    "pageCount": 80,
    "readPage": 90,
    "reading": false
}
```
### Response
```json
{
    "status": "fail",
    "message": "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
}
```

## Update Book with Invalid Id

`PUT /books/xxxxx`

### Request
```json
PUT /books/xxxxx HTTP/1.1
Host: localhost:9000
Content-Length: 219

{
    "name": "Buku A Revisi",
    "year": 2011,
    "author": "Jane Doe",
    "summary": "Lorem Dolor sit Ametttt",
    "publisher": "Dicoding",
    "pageCount": 200,
    "readPage": 26,
    "reading": false
}
```
### Response
```json
{
    "status": "fail",
    "message": "Gagal memperbarui buku. Id tidak ditemukan"
}
```

## Delete Book with Correct Id

`DELETE /books/{{bookId}}`

### Request
```json
DELETE /books/ HTTP/1.1
Host: localhost:9000
```
### Response
```json
{
    "status": "success",
    "message": "Buku berhasil dihapus"
}
```

## Delete Finished book

`DELETE /books/{{bookIdWithFinishedReading}}`

### Request
```json
DELETE /books/ HTTP/1.1
Host: localhost:9000
```
### Response
```json
{
    "status": "success",
    "message": "Buku berhasil dihapus"
}
```

## Delete Book with Invalid Id

`DELETE /books/xxxxx`

### Request
```json
DELETE /books/xxxxx HTTP/1.1
Host: localhost:9000
```
### Response
```json
{
    "status": "fail",
    "message": "Buku gagal dihapus. Id tidak ditemukan"
}
```

## Add Reading and Finished Book

`POST /books`

### Request
```json
POST /books HTTP/1.1
Host: localhost:9000
Content-Length: 225

{
    "name": "Buku A",
    "year": 2010,
    "author": "John Doe",
    "summary": "Lorem ipsum dolor sit amet",
    "publisher": "Dicoding Indonesia",
    "pageCount": 100,
    "readPage": 100,
    "reading": true
}
```
### Response
```json
{
    "status": "success",
    "message": "Buku berhasil ditambahkan",
    "data": {
        "bookId": "54iIJcxf2VU9ffgS"
    }
}
```

## Add Reading and Unfinished Book with "Dicoding" Name

`POST /books`

### Request
```json
POST /books HTTP/1.1
Host: localhost:9000
Content-Length: 231

{
    "name": "dicoding Jobs",
    "year": 2010,
    "author": "John Doe",
    "summary": "Lorem ipsum dolor sit amet",
    "publisher": "Dicoding Indonesia",
    "pageCount": 100,
    "readPage": 0,
    "reading": false
}
```
### Response
```json
{
    "status": "success",
    "message": "Buku berhasil ditambahkan",
    "data": {
        "bookId": "3a9sc5ewSh7RsuyC"
    }
}
```

## Add Unreading Books and Unfinished Book "Dicoding" Name

`POST /books`

### Request
```json
POST /books HTTP/1.1
Host: localhost:9000
Content-Length: 231

{
    "name": "dicoding Jobs",
    "year": 2010,
    "author": "John Doe",
    "summary": "Lorem ipsum dolor sit amet",
    "publisher": "Dicoding Indonesia",
    "pageCount": 100,
    "readPage": 0,
    "reading": false
}
```
### Response
```json
{
    "status": "success",
    "message": "Buku berhasil ditambahkan",
    "data": {
        "bookId": "3a9sc5ewSh7RsuyC"
    }
}
```

## Add Unreading Books and Unfinished Book

`POST /books`

### Request
```json
POST /books HTTP/1.1
Host: localhost:9000
Content-Length: 224

{
    "name": "Buku A",
    "year": 2010,
    "author": "John Doe",
    "summary": "Lorem ipsum dolor sit amet",
    "publisher": "Dicoding Indonesia",
    "pageCount": 100,
    "readPage": 0,
    "reading": false
}
```
### Response
```json
{
    "status": "success",
    "message": "Buku berhasil ditambahkan",
    "data": {
        "bookId": "6a61y5XHFhhpLU_v"
    }
}
```

## Get All Reading Books

`GET /books?reading=1`

### Request
```json
GET /books?reading=1 HTTP/1.1
Host: localhost:9000
```
### Response
```json
{
    "status": "success",
    "data": {
        "books": [
            {
                "id": "54iIJcxf2VU9ffgS",
                "name": "Buku A",
                "publisher": "Dicoding Indonesia"
            },
            {
                "id": "msrs3hLMh3tNcy92",
                "name": "Kelas Dicoding",
                "publisher": "Dicoding Indonesia"
            }
        ]
    }
}
```

## Get All Unreading Books

`GET /books?reading=0`

### Request
```json
GET /books?reading=0 HTTP/1.1
Host: localhost:9000
```
### Response
```json
{
    "status": "success",
    "data": {
        "books": [
            {
                "id": "3a9sc5ewSh7RsuyC",
                "name": "dicoding Jobs",
                "publisher": "Dicoding Indonesia"
            },
            {
                "id": "6a61y5XHFhhpLU_v",
                "name": "Buku A",
                "publisher": "Dicoding Indonesia"
            }
        ]
    }
}
```

## Get All Finished Books

`GET /books?finished=1`

### Request
```json
GET /books?finished=1 HTTP/1.1
Host: localhost:9000
```
### Response
```json
{
    "status": "success",
    "data": {
        "books": [
            {
                "id": "54iIJcxf2VU9ffgS",
                "name": "Buku A",
                "publisher": "Dicoding Indonesia"
            }
        ]
    }
}
```

## Get All Unfinished Books

`GET /books?finished=0`

### Request
```json
GET /books?finished=0 HTTP/1.1
Host: localhost:9000
```
### Response
```json
{
    "status": "success",
    "data": {
        "books": [
            {
                "id": "msrs3hLMh3tNcy92",
                "name": "Kelas Dicoding",
                "publisher": "Dicoding Indonesia"
            },
            {
                "id": "3a9sc5ewSh7RsuyC",
                "name": "dicoding Jobs",
                "publisher": "Dicoding Indonesia"
            },
            {
                "id": "6a61y5XHFhhpLU_v",
                "name": "Buku A",
                "publisher": "Dicoding Indonesia"
            }
        ]
    }
}
```

## Get All Books Contains "Dicoding" Name

`GET /books?name=Dicoding`

### Request
```json
GET /books?name=Dicoding HTTP/1.1
Host: localhost:9000
```
### Response
```json
{
    "status": "success",
    "data": {
        "books": [
            {
                "id": "msrs3hLMh3tNcy92",
                "name": "Kelas Dicoding",
                "publisher": "Dicoding Indonesia"
            },
            {
                "id": "3a9sc5ewSh7RsuyC",
                "name": "dicoding Jobs",
                "publisher": "Dicoding Indonesia"
            }
        ]
    }
}
```

## Information
You can also view the API documentation through the following <a href="https://documenter.getpostman.com/view/27268464/2s9YXk3g6S" target="_blank">postman</a> link