alter table products
drop column image;

alter table products
add img varchar(255) not null;

update products
set img = 'https://photos.app.goo.gl/TVZD9gJiJtHmQjze9'
where id = 2;

insert into products (name, description, price, sale_price, quantity, category, type, img)
values (
    (3, 'karen', 'some1', 30, 60, 90, 'person', 'human', 'https://photos.app.goo.gl/LtSJHRnz53NNqYM29'),
    (4, 'erika', 'some2', 90, 30, 60, 'person', 'human', 'https://photos.app.goo.gl/tQvPD4eaMTo7cQCSA')
);

insert into products (name, description, price, sale_price, quantity, category, type, img)
values ('karen', 'some1', 30, 60, 90, 'person', 'human', 'https://photos.app.goo.gl/LtSJHRnz53NNqYM29');
