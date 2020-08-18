---
title: Documentation du contenu Nuxt
description: 'Renforcez votre application NuxtJS avec le module @ nuxt / content: écrivez dans un répertoire content / et récupérez vos fichiers Markdown, JSON, YAML et CSV via une API similaire à MongoDB, agissant comme un CMS Headless basé sur Git.'
---
## Bonjour de [Contenu Nuxt.js] (https://content.nuxtjs.org) 👋

👉 Modifiez ce [sandbox] (https://codesandbox.io/s/nuxt-content-tailwindcss-typography-twhtf). Niice!

👀 Voir [démo en direct] (https://nuxt-tailwind-typo.vercel.app)

<hr />

<p class = "lead">
  <i> Jusqu'à présent </i>, essayer de styliser un article, un document ou un article de blog avec Tailwind était une tâche fastidieuse
  tâche qui nécessitait un sens aigu de la typographie et beaucoup de CSS personnalisés complexes.
</p>

Par _default_, c Tailwind supprime tous les styles de navigateur par défaut des paragraphes, des en-têtes, des listes et plus encore. Cela finit par être vraiment utile pour créer des interfaces utilisateur d'applications car vous passez moins de temps à annuler les styles d'agent utilisateur, mais lorsque vous essayez simplement de styliser du contenu provenant d'un éditeur de texte enrichi dans un CMS ou un fichier de démarque, cela peut être surprenant et peu intuitif.

Nous recevons beaucoup de plaintes à ce sujet, avec des gens qui nous demandent régulièrement des choses comme:

> Pourquoi Tailwind supprime-t-il les styles par défaut sur mes éléments `h1`? Comment désactiver cela? Que voulez-vous dire que je perds tous les autres styles de base aussi?

Nous vous entendons, mais nous ne sommes pas convaincus que la simple désactivation de nos styles de base soit ce que vous voulez vraiment. Vous ne voulez pas avoir à supprimer des marges gênantes chaque fois que vous utilisez un élément `p` dans une partie de l'interface utilisateur de votre tableau de bord. Et je doute que vous souhaitiez vraiment que vos articles de blog utilisent les styles user-agent non plus - vous voulez qu'ils aient l'air génial, pas terrible.

Le plugin `@ tailwindcss / typography` est notre tentative de vous donner ce que vous voulez _actuellement_, sans aucun des inconvénients de faire quelque chose de stupide comme la désactivation de nos styles de base.

Il ajoute une nouvelle classe `prose` que vous pouvez gifler sur n'importe quel bloc de contenu HTML vanille et le transformer en un beau document bien formaté:

`` `html
<article class = "prose">
  <h1> Pain à l'ail et fromage: ce que la science nous dit </h1>
  <p>
    Pendant des années, les parents ont épousé les avantages pour la santé de manger du pain à l'ail
    avec du fromage à leurs enfants, avec la nourriture qui gagne un statut emblématique
    dans notre culture, les enfants s'habillent souvent en pain chaud et au fromage pour
    Halloween.
  </p>
  <p>
    Mais une étude récente montre que l'apéritif célèbre peut être lié à un
    série de cas de rage surgissant dans tout le pays.
  </p>
  <! - ... ->
</article>
''

Pour plus d'informations sur la façon d'utiliser le plugin et les fonctionnalités qu'il inclut, [lire la documentation] (https://github.com/tailwindcss/typography/blob/master/README.md).

---

## À quoi s'attendre à partir de maintenant

Ce qui suit n'est qu'un tas d'absurdités absolues que j'ai écrites sur le plugin dogfood lui-même. Il comprend tous les éléments typographiques sensibles auxquels je pourrais penser, comme le ** texte en gras **, les listes non ordonnées, les listes ordonnées, les blocs de code, les guillemets, _et même l'italique_.

Il est important de couvrir tous ces cas d'utilisation pour plusieurs raisons:

1. Nous voulons que tout soit beau dès la sortie de la boîte.
2. Vraiment juste la première raison, c'est tout l'intérêt du plugin.
3. Voici une troisième raison pour laquelle une liste de trois éléments semble plus réaliste qu'une liste de deux éléments.

Nous allons maintenant essayer un autre style d'en-tête.

### La typographie doit être simple

C'est donc un en-tête pour vous - avec un peu de chance si nous avons fait notre travail correctement, cela semblera assez raisonnable.

Une personne sage m'a dit une fois à propos de la typographie:

> La typographie est assez importante si vous ne voulez pas que vos affaires ressemblent à des ordures. Faites-le bien, alors ce ne sera pas mal.

Il est probablement important que les images soient correctes ici par défaut également:

<figure>
  <img
    src = "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
    alt = ""
  />
  <figcaption>
    Contrairement à la croyance populaire, Lorem Ipsum n'est pas simplement un texte aléatoire. Il a des racines dans un morceau de
    littérature latine classique de 45 avant JC, ce qui en fait plus de 2000 ans.
  </figcaption>
</figure>

Maintenant, je vais vous montrer un exemple de liste non ordonnée pour m'assurer que cela a l'air bien aussi:

- Voici donc le premier élément de cette liste.
- Dans cet exemple, nous gardons les éléments courts.
- Plus tard, nous utiliserons des éléments de liste plus longs et plus complexes.

Et c'est la fin de cette section.

## Et si on empile les en-têtes?

### Nous devons aussi nous assurer que cela a l'air bien.

Parfois, vous avez des titres directement les uns sous les autres. Dans ces cas, vous devez souvent annuler la marge supérieure du deuxième en-tête, car il est généralement préférable que les en-têtes soient plus rapprochés qu'un paragraphe suivi d'un en-tête.

### Lorsqu'un titre vient après un paragraphe…

Lorsqu'un titre vient après un paragraphe, nous avons besoin d'un peu plus d'espace, comme je l'ai déjà mentionné ci-dessus. Voyons maintenant à quoi ressemblerait une liste plus complexe.

- ** Je fais souvent cette chose où les éléments de liste ont des en-têtes. **

  Pour une raison quelconque, je pense que cela a l'air cool, ce qui est regrettable car c'est assez ennuyeux d'avoir les bons styles.

  J'ai souvent deux ou trois paragraphes dans ces éléments de liste, donc le plus difficile est d'obtenir l'espacement entre les paragraphes, l'élément de la liste