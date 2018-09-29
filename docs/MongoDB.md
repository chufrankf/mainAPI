MongoDB
======
Herein contains the basic queries we can use to search through mongo DB and analyse its contents.

Description
------
MongoDB is a NOSQL database, i.e. its a database which has no relational dependencies. While SQL contains a standard schema and tables that must be predefined and created before inserting data, NoSQL is just a set of key-value pairs.

Terms
-------

__DB__ : This is a database that contains multiple collections. This is synonymous to a DB in SQL which contains multiple tables. However, remember that the db in NoSQL does not contain any stored procedures, triggers, foreign and primary keys, views, etc. It is solely a database consistent of collections.

__Collection__ : A collection is synonymous to a Table in SQL. Whereas a collection contains documents, a table contains rows. 

__Document__ : A document is synonymous to a row in SQL. In SQL a row is limited by the number of columns and each column must contain a specific type. In other words, in SQL there are very strict rules on what kind of information can go in each role, and it must follow those rules otherwise information cannot be added in. However, a document in NoSQL does not follow those rules. There are no columns. A document may have any number of values regardless of the other documents in a collection. A document only contains a bunch of key value pairs. 

__References__ : While there may be no Foreign keys or Pimary keys in Documents. They do contain "_id" values. These are the keys for the document, and you should be able to identify the document within a collection by the key


