[gitex-flow](../README.md) › [avh](../modules/avh.md) › [ReleaseGitFlowBranch](avh.releasegitflowbranch.md)

# Class: ReleaseGitFlowBranch

This class wraps the release branch of the AVH implementation.

## Hierarchy

* [AvhGitFlowBranch](avh.avhgitflowbranch.md)

  ↳ **ReleaseGitFlowBranch**

## Implements

* [GitFlowBranch](../interfaces/api.gitflowbranch.md)

## Index

### Constructors

* [constructor](avh.releasegitflowbranch.md#constructor)

### Properties

* [defaultBase](avh.releasegitflowbranch.md#readonly-defaultbase)
* [type](avh.releasegitflowbranch.md#readonly-type)

### Methods

* [finish](avh.releasegitflowbranch.md#finish)
* [getConfig](avh.releasegitflowbranch.md#getconfig)
* [list](avh.releasegitflowbranch.md#list)
* [start](avh.releasegitflowbranch.md#start)

## Constructors

###  constructor

\+ **new ReleaseGitFlowBranch**(`repoPath?`: undefined | string, `configProvider?`: [ConfigProvider](../interfaces/api.configprovider.md)‹[GitFlowConfig](../interfaces/api.gitflowconfig.md)›): *[ReleaseGitFlowBranch](avh.releasegitflowbranch.md)*

*Overrides [AvhGitFlowBranch](avh.avhgitflowbranch.md).[constructor](avh.avhgitflowbranch.md#constructor)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`repoPath?` | undefined &#124; string | The path to the git repository. |
`configProvider?` | [ConfigProvider](../interfaces/api.configprovider.md)‹[GitFlowConfig](../interfaces/api.gitflowconfig.md)› | Git flow config provider.  |

**Returns:** *[ReleaseGitFlowBranch](avh.releasegitflowbranch.md)*

## Properties

### `Readonly` defaultBase

• **defaultBase**: *[GitFlowBaseBranchType](../modules/api.md#gitflowbasebranchtype)* = "develop"

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md).[defaultBase](../interfaces/api.gitflowbranch.md#readonly-defaultbase)*

*Overrides [AvhGitFlowBranch](avh.avhgitflowbranch.md).[defaultBase](avh.avhgitflowbranch.md#readonly-abstract-defaultbase)*

{@inheritdoc}

___

### `Readonly` type

• **type**: *[GitFlowBranchType](../modules/api.md#gitflowbranchtype)* = "release"

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md).[type](../interfaces/api.gitflowbranch.md#readonly-type)*

*Overrides [AvhGitFlowBranch](avh.avhgitflowbranch.md).[type](avh.avhgitflowbranch.md#readonly-abstract-type)*

{@inheritdoc}

## Methods

###  finish

▸ **finish**(`name?`: undefined | string, `msg?`: undefined | string): *Promise‹void›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Inherited from [AvhGitFlowBranch](avh.avhgitflowbranch.md).[finish](avh.avhgitflowbranch.md#finish)*

{@inheritdoc}

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | Name of the branch to be finished. |
`msg?` | undefined &#124; string | Message to be set for finishing the branch.  |

**Returns:** *Promise‹void›*

___

###  getConfig

▸ **getConfig**(): *Promise‹[GitFlowBranchConfig](../interfaces/api.gitflowbranchconfig.md)›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Overrides [AvhGitFlowBranch](avh.avhgitflowbranch.md).[getConfig](avh.avhgitflowbranch.md#abstract-getconfig)*

{@inheritdoc}

**Returns:** *Promise‹[GitFlowBranchConfig](../interfaces/api.gitflowbranchconfig.md)›*

___

###  list

▸ **list**(): *Promise‹string[]›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Inherited from [AvhGitFlowBranch](avh.avhgitflowbranch.md).[list](avh.avhgitflowbranch.md#list)*

{@inheritdoc}

**Returns:** *Promise‹string[]›*

___

###  start

▸ **start**(`name?`: undefined | string, `base?`: undefined | string): *Promise‹string›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Inherited from [AvhGitFlowBranch](avh.avhgitflowbranch.md).[start](avh.avhgitflowbranch.md#start)*

{@inheritdoc}

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | Name of the branch to be started. |
`base?` | undefined &#124; string | Base of the branch should be started from. |

**Returns:** *Promise‹string›*

The git reference of the create branch.
