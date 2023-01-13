#include "lists.h"

/**
 * sum_dlistint - a function that returns the sum of the data (n)
 * of a dlistint_t linked list.
 * @head: pointer to the list
 *
 * Return: the sum of all the data in the list,
 * if the list is empty return 0
 */
int sum_dlistint(dlistint_t *head)
{
	dlistint_t *node = head;
	int sum = 0;

	while (node)
	{
		sum += node->n;
		node = node->next;
	}
	return (sum);
}
