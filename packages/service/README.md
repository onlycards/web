# Service

Библиотека взаимодействия с внешними данными.

- `src/admin`: админские типы и данные;
- `src/client`: клиентские типы и данные;
- `src/common`: общие типы и данные;

## Админские функции

Заполню позже.

## Клиентские функции

```typescript
export declare const clientLogIn: (
  name: string,
  password: string,
) => Promise<boolean>
```

Попытка авторизации. Вернёт `true` в случае успеха.

```typescript
export declare const getClientData: () => Promise<ClientData | null>
```

Возвращает все данные пользователя
или `null`, если пользователь не авторизован.

```
export declare const logClientOut: () => Promise<void>
```

Отмена авторизации (выход из системы).

## Направление импортов

Модули `admin` и `client` могут импортировать то, что ре-экспортирует `common`.
Другие направления импортов запрещены.
