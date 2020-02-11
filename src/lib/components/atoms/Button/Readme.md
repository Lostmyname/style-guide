Our Primary button colour is `green` aligning with with progressive purchasing action associated with the button. The Secondary button colour is `grey-medium` associated with the explorative nature of the secondary CTA’s.

A Primary Button should only ever be used for positive, progressive actions. The Primary Button should guide users from any product creation page, though the product creation journey, and into the checkout phase.

A Secondary Button should always also have the outlined prop applied. The action of the Secondary Button supports discovery and exploration but should not be directly associated with a key product purchasing action.

A Tertiary Button can be used at the discretion of the designer as an alternative to the Secondary Button.

An inactive button should not be given to the user without a clear call to action to the next state. Where there’s a clear error or blocker in the customer journey, a disabled button should be used to reinforce the importance of missing information or as a way of reiterating that the next progression in the journey is unattainable. It should never be used as the only indicator to a user that they are unable to progressed with a task.

#### Our primary button
```js { "noeditor": true }
<PlaygroundWrapper>
    <Button color="green">This is a button</Button>
    <Button color="green" raised>This is a button</Button>
    <Button color="green" outlined>This is a button</Button>
    <Button color="green" disabled>This is a button</Button>
</PlaygroundWrapper>
```

#### Our secondary button
```js { "noeditor": true }
<PlaygroundWrapper>
    <Button color="yellow">This is a button</Button>
    <Button color="yellow" raised>This is a button</Button>
    <Button color="yellow" outlined>This is a button</Button>
    <Button color="yellow" disabled>This is a button</Button>
</PlaygroundWrapper>
```

```js
<Button>This is a button</Button>
```
