CREATE KEYSPACE IF NOT EXISTS kent_craftsmanship WITH REPLICATION = {
	'class' : 'SimpleStrategy',
	'replication_factor' : 1
};

CREATE TABLE IF NOT EXISTS kent_craftsmanship.inquiries (
	id uuid,
	email text,
	submitted timestamp,
	subject text,
	body text,
	read_date timestamp,
	PRIMARY KEY (id)
);
	
CREATE TABLE IF NOT EXISTS kent_craftsmanship.unread_inquiries (
	id uuid,
	email text,
	submitted timestamp,
	subject text,
	body text,
	PRIMARY KEY (id)
);
